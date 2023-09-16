import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

function SignInFun({ onSignIn, onHide }) {
  const [checked, setChecked] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    let isUniversityUser = false; // Default to false

    // Check if the entered email and password are valid
    if (email === "user@email.com" && password === "unipi") {
      // Clear the form fields and error message
      setEmail("");
      setPassword("");
      setError("");
      // Close the login dialog
      onHide();
    } else if (email === "uniuser@email.com" && password === "uni") {
      // For another specific email and password combination, set isUniversityUser to true
      isUniversityUser = true;
      // Clear the form fields and error message
      setEmail("");
      setPassword("");
      setError("");
      // Close the login dialog
      onHide();
    } else {
      setError("Invalid email or password");
    }

    // Notify the parent component of the successful login and isUniversityUser value
    onSignIn(isUniversityUser);
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img
            src="/images/UNIPI.jpg"
            alt="logo Image"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <a
            href="https://www.google.com/"
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >
            Create today!
          </a>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <Checkbox
                id="rememberme"
                onChange={(e) => setChecked(e.checked)}
                checked={checked}
                className="mr-2"
              />
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <a
              href="https://www.google.com/"
              className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
            >
              Forgot your password?
            </a>
          </div>

          <Button
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
}

export default SignInFun;
