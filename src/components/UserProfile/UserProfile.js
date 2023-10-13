// User profile page that allows users to access different tabs based on their roles.
import React, { useState, useEffect } from "react";
import Settings from "../Settings/Settings";
import "./UserProfile.css";
// import Favorites from "../Favorites/Favorites";
import AddCourse from "../AddCourse/AddCourse";
import EcoursesGrid from "../EcoursesPages/Ecoursegrid";
import { EcoursesData } from "../../mock-d/EcoursesData";

// added isUniversityUser = false for testing will change when we fetch data for users
function UserProfile({ isUniversityUser = false }) {
  // start @setting when accesing profile. Just for testing will change
  const [activeTab, setActiveTab] = useState("settings");
  const [ecoursesData, setEcoursesData] = useState([]);
  console.log("Checking ecoursesData in UserProfile", ecoursesData);
  const tabs = ["settings"];

  // fetch course data asynchronously and set it when the Promise resolves. The course
  // data is fetched from local storage
  useEffect(() => {
    // Fetch your data asynchronously and set it when the Promise resolves
    EcoursesData.getLocalStorageData().then((data) => {
      console.log(data); // Log the resolved data
      setEcoursesData(data);
    });
  }, []);

  // if user has university access the categories below will appear as tabs
  if (isUniversityUser) {
    tabs.push("add-course", "uploaded-courses"); //, "unpublished-courses"
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
      <h2>Welcome!</h2>
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

        {/* {activeTab === "favorites" && (
          <Favorites isUniversityUser={isUniversityUser} />
        )} */}
        {activeTab === "add-course" && isUniversityUser && <AddCourse />}
        {activeTab === "uploaded-courses" && (
          <EcoursesGrid
            ecoursesData={ecoursesData}
            // onToggleFavorite={handleToggleFavorite}
          />
        )}
        {/* {activeTab === "unpublished-courses" && (
          <Favorites isUniversityUser={isUniversityUser} />
        )} */}
      </div>
    </div>
  );
}

export default UserProfile;
