import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";
import DropdownList from "./DropdownList";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
// import Header from "./Header";
// import Footer from "./Footer";
import "./AddCourse.css";

function AddCourse() {
  const [selectedFields, setSelectedFields] = useState(null);

  const [course, setCourse] = useState({
    id: "",
    title: "",
    image: "",
    price: "",
    category: "",
    ecourseLocation: "",
    university: "",
    professors: [{ professor1: "", professor2: "", professor3: "" }],
    duration: "",
    ECTS: "",
    language: [{ language1: "", language2: "" }],
    description: " ",
    rating: "",
    contact: [{ phone: "", email: "", socialMedia: "" }],
  });
  const [value, setValue] = useState("");

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

  const [categories] = useState([
    { name: "Programming" },
    { name: "Mathematics" },
    { name: "Physics" },
    { name: "Biology" },
    { name: "English" },
    { name: "Greek" },
    { name: "Linguistics" },
    { name: "Psychology" },
    { name: "History" },
  ]);
  const [locations] = useState([
    { name: "Hybrid" },
    { name: "Online" },
    { name: "Onsite" },
  ]);

  const [universities] = useState([
    { name: "University of Piraeus" },
    {
      name: "National and Kapodistrian University of Athens",
    },
    {
      name: "EMP",
    },
    {
      name: "Univesity of West Attica",
    },
    {
      name: "OPA",
    },
    {
      name: "Panteion University",
    },
    {
      name: "Aristotle University of Thessaloniki",
    },
  ]);

  return (
    <div>
      <div className="add-course-container">
        <h2>Add Course</h2>
        <form>
          {/* Course Details */}
          <div className="course-details">
            {/* Add Course Name */}

            <InputText
              placeholder="Course Name"
              // value={course.name}
              onChange={handleChange}
            />

            {/* Add University */}

            <DropdownList
              list={universities}
              placeholder={"Select University"}
            />

            {/* <select
              name="mode"
              value={course.university}
              onChange={handleChange}
            >
              <option value="">University</option>
              <option value="University of Piraeus">
                University of Piraeus
              </option>
              <option value="National and Kapodistrian University of Athens">
                National and Kapodistrian University of Athens
              </option>
              <option value="EMP">EMP</option>
              <option value="Univesity of West Attica">
                Univesity of West Attica
              </option>
              <option value="OPA">OPA</option>
              <option
                value="Panteion
            university"
              >
                Panteion university
              </option>
              <option value="Aristotle University of Thessaloniki">
                Aristotle University of Thessaloniki
              </option>
            </select> */}

            {/* Add Professors Name */}
            <InputText
              placeholder="Professors Name"
              // value={course.professors[1]}
              onChange={handleChange}
            />

            {/* Duration */}
            <InputText
              type="text"
              placeholder="Duration"
              // value={course.duration}
              onChange={handleChange}
            />

            {/* ECTS */}
            <InputText
              keyfilter="int"
              type="text"
              name="ECTS"
              placeholder="ECTS"
              // value={course.ECTS}
              onChange={handleChange}
            />

            {/* Price */}
            <InputText
              keyfilter="int"
              type="text"
              name="price"
              placeholder="Price"
              // value={course.price}
              onChange={handleChange}
            />

            {/* Location */}
            {/* <select name="mode" value={course.mode} onChange={handleChange}>
              <option value="">Select Location</option>
              <option value="online">Online</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select> */}

            <DropdownList list={locations} placeholder={"Select Location"} />

            {/* Fields */}
            {/* <select name="mode" value={course.mode} onChange={handleChange}>
              <option value="">Select Field</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Programming">Programming</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Biology">Biology</option>
              <option value="English">English</option>
              <option value="Greek">Greek</option>
              <option value="Linguistics">Linguistics</option>
              <option value="Law">Law</option>
              <option value="Psychology">Psychology</option>
              <option value="History-Archaelogy">History-Archaelogy</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Engineering">Engineering</option>
              <option value="Art">Art</option>
            </select> */}

            <DropdownList list={categories} placeholder={"Select Field"} />

            {/* Course Desciption */}

            <InputTextarea
              name="description"
              placeholder="Course Description"
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              // value={course.description}
              // onChange={handleChange}
              rows={5}
              cols={300}
            />
          </div>
          {/* Upload Files */}
          <h3>Upload thumbnail</h3>
          <FileUpload
            name="demo[]"
            url={"/api/upload"}
            multiple
            accept="image/*"
            maxFileSize={1000000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
          />
          {/* Upload Photo
          <h2>Upload Photos</h2>
          <FileUpload
            name="demo[]"
            url={"/api/upload"}
            multiple
            accept="image/*"
            maxFileSize={1000000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
          /> */}

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Add Contact Info</h3>
            <InputText
              keyfilter="email"
              placeholder="Email"
              // value={}
              onChange={handleContactInfoChange}
            />
            <InputText
              keyfilter="pint"
              placeholder="Phone"
              // value={\}
              onChange={handleContactInfoChange}
            />

            <InputText
              // keyfilter="hex"
              placeholder="Social Media"
              // value={course.contactInfo.socialMedia}
              onChange={handleContactInfoChange}
            />
          </div>
          {/* Buttons */}
          <div className="card flex buttons">
            <Button label="Save Course" type="submit" onClick={handleSave} />
            <Button
              label="Publish Course"
              type="submit"
              onClick={handlePublish}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
