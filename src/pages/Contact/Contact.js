// Contact Page
import React, { useState } from "react";
import { Button } from "primereact/button";

import "./Contact.css";
function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send an email or save to a database
    setEmail("");
    setMessage("");
  };

  return (
    <div
      className="contact pb-8"
      style={{ backgroundImage: "url(./contact.jpg)" }}
    >
      <div className="contact-form-container surface-400 border-bluegray-400 border-1 border-solid border-round	mt-7 ml-7 mr-7">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              required
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <Button label="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
