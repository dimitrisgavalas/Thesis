import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AddCourse.css";

function AddCourse() {
  const [course, setCourse] = useState({
    name: "",
    professors: "",
    duration: "",
    ECTS: "",
    price: "",
    mode: "",
    description: "",
    contactInfo: {
      email: "",
      phone: "",
      socialMedia: "",
    },
    categories: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      contactInfo: {
        ...prevCourse.contactInfo,
        [name]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log("Save course:", course);
    // Save the course data to the server as an unpublished course
  };

  const handlePublish = () => {
    console.log("Publish course:", course);
    // Save the course data to the server as a published course
  };

  return (
    <div>
      <Header />
      <div className="add-course-container">
        <h2>Add Course</h2>
        <form>
          {/* Course Details */}
          <div className="course-details">
            <input
              type="text"
              name="name"
              placeholder="Course Name"
              value={course.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="professors"
              placeholder="Professors Name"
              value={course.professors}
              onChange={handleChange}
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={course.duration}
              onChange={handleChange}
            />
            <input
              type="text"
              name="ECTS"
              placeholder="ECTS"
              value={course.ECTS}
              onChange={handleChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={course.price}
              onChange={handleChange}
            />
            <select name="mode" value={course.mode} onChange={handleChange}>
              <option value="">Select Mode</option>
              <option value="online">Online</option>
              <option value="onsite">Onsite</option>
            </select>
            <textarea
              name="description"
              placeholder="Course Description"
              value={course.description}
              onChange={handleChange}
            ></textarea>
            <input type="file" name="media" />
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={course.contactInfo.email}
              onChange={handleContactInfoChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={course.contactInfo.phone}
              onChange={handleContactInfoChange}
            />
            <input
              type="text"
              name="socialMedia"
              placeholder="Social Media"
              value={course.contactInfo.socialMedia}
              onChange={handleContactInfoChange}
            />
          </div>

          {/* Categories */}
          <div className="categories">
            <h3>Categories</h3>
            <input
              type="text"
              name="categories"
              placeholder="Field, Duration, Price, Onsite/Online, University"
              value={course.categories}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button type="button" onClick={handleSave}>
              Save Course
            </button>
            <button type="button" onClick={handlePublish}>
              Publish Course
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddCourse;
