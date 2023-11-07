import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

function SignUpForm({ onSignUp, onHide }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSignUp = () => {
    // Validate the user's input (you can add more validation logic here)
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Clear the form fields
    setName("");
    setEmail("");
    setPassword("");
    setChecked(false);

    // Close the signup dialog
    onHide();

    // Notify the parent component of the successful signup and pass user data
    onSignUp({
      name,
      email,
      password,
      rememberMe: checked,
    });
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full">
        <div className="text-center mb-5">
          <img
            src="/images/UNIPI.jpg"
            alt="logo Image"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">Sign Up</div>
        </div>

        <div>
          <label htmlFor="name" className="block text-900 font-medium mb-2">
            Name
          </label>
          <InputText
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
          </div>

          <Button
            label="Sign Up"
            icon="pi pi-user"
            className="w-full"
            onClick={handleSignUp}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
