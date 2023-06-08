import React, { useState } from "react";
import Settings from "../Settings/Settings";
import "./UserProfile.css";

function UserProfile({ isUniversityUser = false }) {
  const [activeTab, setActiveTab] = useState("favorites");

  const tabs = ["settings", "favorites"];

  if (isUniversityUser) {
    tabs.push("add-course", "uploaded-courses", "unpublished-courses");
  }

  return (
    <div className="pt-2 user-profile">
      <div className="avatar-container">
        <img
          className="avatar"
          src="https://via.placeholder.com/100"
          alt="User Avatar"
        />
        <div className="change-avatar">Change Avatar</div>
      </div>
      <h2>Welcome, username</h2>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === "settings" && (
          <Settings isUniversityUser={isUniversityUser} />
        )}
        {/* Υπολοιπα Tabs. Θα προστεθουν συντομα. */}
      </div>
    </div>
  );
}

export default UserProfile;
