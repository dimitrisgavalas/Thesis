import React, { useState } from "react";
import Settings from "../Settings/Settings";
import "./UserProfile.css";
import { Menubar } from "primereact/menubar";

// added isUniversityUser = false for testing will change when we fetch data for users
function UserProfile({ isUniversityUser = false }) {
  // start @setting when accesing profile. Just for testing will change
  const [activeTab, setActiveTab] = useState("settings");

  const tabs = ["settings", "favorites"];

  // if user has university access the categories below will appear as tabs
  if (isUniversityUser) {
    tabs.push("add-course", "uploaded-courses", "unpublished-courses");
  }

  return (
    <div className="pt-4 user-profile">
      <div className="avatar-container change-avatar">
        <img
          className="avatar"
          src="images/person.jpg"
          alt="User Avatar"
          width="100"
          height="100"
        />
      </div>

      {/* add u/n variable */}
      <h2>Welcome, Dimitris!</h2>
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
