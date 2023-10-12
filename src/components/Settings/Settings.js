// User Settings
import React from "react";
import "./Settings.css";

// Depending on the user, it renders different sections for regular users and university users.
function Settings({ isUniversityUser }) {
  const handleSubmit = () => {
    // Αν είναι Uni user mporei να κανει submit form για εγκριση χρηστη.Handle form submission and sending email with files
  };

  return (
    <div className="settings">
      <>
        <div className="m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
          <label
            htmlFor="email"
            className="block text-900 font-medium mb-2 inline-block "
          >
            Email: (yourEmail@email.com)
          </label>
          <button className="ml-4">Change Email</button>

          <br />
          <br />
          <label
            htmlFor="password"
            className="block text-900 font-medium mb-2 inline-block "
          >
            Password: ●●●●●●●●
          </label>
          <button className="ml-4">Change Password</button>
        </div>

        <div className="border-2 border-round surface-border p-2 pb-5 m-2">
          <h3>Notifications</h3>
          <label>
            <input type="checkbox" />
            Notification Type 1
          </label>
          <label>
            <input type="checkbox" />
            Notification Type 2
          </label>
          <br />
          <button>Save Changes</button>
        </div>

        <div className="m-2 pt-5 pb-5  justify-content-center border-2 surface-border border-round p-2">
          <h3>Delete Account</h3>
          <button>Delete Account</button>
        </div>

        <div className="m-2 pt-5 pb-5  justify-content-center border-2 surface-border border-round p-2">
          <h3>Marketing</h3>
          <label>
            <input type="checkbox" />
            Opt out from marketing emails
          </label>
          <br />
          <button>Save Changes</button>
        </div>

        <div className="m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2">
          {!isUniversityUser && (
            <>
              <h3>Become a University User</h3>
              <p>Instructions...</p>
              <input type="file" />
              <button onClick={handleSubmit}>Send Request</button>
            </>
          )}
        </div>
      </>
    </div>
  );
}

export default Settings;
