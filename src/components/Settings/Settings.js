import React from "react";
import { InputText } from "primereact/inputtext";

import "./Settings.css";

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
          {/* <InputText
            id="email"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
          /> */}
          <br />
          <br />
          <label
            htmlFor="password"
            className="block text-900 font-medium mb-2 inline-block "
          >
            Password: ●●●●●●●●
          </label>
          <button className="ml-4">Change Password</button>
          {/* <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
          /> */}
        </div>
        {/* ml-6(margin left 6. xwros ejw apo adikeimeno)m-2(megalwnei margin by 2) pt-5(padding) pb-5(xwros apo katw) flex(ta xalaei pane ola se seira) justify-content-center border-2 surface-border border-round p-2(padding apo panw ligo maybe) */}
        {/* class="border-2 surface-border border-round p-2 m-2 down pt-7 pb-7 flex justify-content-center " */}
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
