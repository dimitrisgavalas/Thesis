import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { EcoursesData } from "../../mock-d/EcoursesData";
import "./AddCourse.css";

function AddCourse() {
  const [selectedProfessors, setProfessors] = useState("");
  const [selectedDescription, setDescription] = useState(""); // Initialize with an empty string
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedFields, setSelectedFields] = useState(null);
  const [selectedUniversity, setselectedUniversity] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const generateUniqueId = () => {
    // Generate a unique ID for the new course
    return Date.now().toString();
  };

  useEffect(() => {
    // Retrieve data from localStorage and merge it with data from getAllEcoursesData
    const localStorageCourses =
      JSON.parse(localStorage.getItem("allCourses")) || [];
    const allEcourses = EcoursesData.getAllEcoursesData(); // Assuming this function exists in your code

    // Combine the two arrays
    const allCourses = [...localStorageCourses, ...allEcourses];

    // Now, you can use the allCourses array in your component's state or for rendering.
    // For example, you can set it in the component's state:
    // setCourses(allCourses);

    // ... (any other logic you want to perform with the combined data)
  }, []);

  const [course, setCourse] = useState({
    id: "",
    title: "",
    image: "/images/thumbnail.png",
    price: "",
    category: "",
    ecourseLocation: "",
    university: "",
    professors: [],
    duration: "",
    ECTS: "",
    language: [{ language1: "", language2: "" }],
    description: " ",
    rating: "",
    contact: [{ phone: "", email: "", socialMedia: "" }],
    website: "",
  });
  const [value, setValue] = useState("");
  // fix University, Proffesors, Location, description
  // sto [] fainetia name, price, location category. mesa --> name,duration,ects,price

  const handleNameChange = (e) => {
    const { value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      title: value,
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleDurationChange = (e) => {
    const { value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      duration: value,
    }));
  };

  const handleECTSChange = (e) => {
    const { value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      ECTS: value,
    }));
  };

  const handleWebsiteChange = (e) => {
    const { value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      website: value,
    }));
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value); // Update the selectedDescription state with the input value
  };

  const handleProfessorsChange = (e) => {
    const { value } = e.target;
    const professorsArray = value
      .split(",")
      .map((professor) => professor.trim()); // Split by comma and trim spaces
    setCourse((prevCourse) => ({
      ...prevCourse,
      professors: professorsArray,
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
    const courseId = generateUniqueId();
    const savedCourses = JSON.parse(localStorage.getItem("savedCourses")) || [];
    const newCourse = { ...course, id: courseId };
    savedCourses.push(newCourse);
    localStorage.setItem("savedCourses", JSON.stringify(savedCourses));
    console.log("Saved course:", newCourse);
    // Reset the form or perform any other necessary actions
  };

  const show = (message) => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: message,
    });
  };

  const toast = useRef(null);

  const handlePublish = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const courseId = generateUniqueId();
    const allCourses = JSON.parse(localStorage.getItem("allCourses")) || [];
    const newCourse = {
      ...course,
      id: courseId,
      ecourseLocation: selectedCity, // Use the selectedCity state
      category: selectedFields,
      university: selectedUniversity,
      description: selectedDescription,
      // image: selectedImage,
    };
    allCourses.push(newCourse);
    localStorage.setItem("allCourses", JSON.stringify(allCourses));
    console.log("Published course:", newCourse);

    // Display a success message
    // window.alert("Course published successfully!"); // Show an alert message
    show("Ecourse Published Succesfully!");
    // Reset the form or perform any other necessary actions
  };

  const [categories] = useState([
    { name: "Programming", value: "Programming" },
    { name: "Mathematics", value: "Mathematics" },
    { name: "Physics", value: "Physics" },
    { name: "Biology", value: "Biology" },
    { name: "English", value: "English" },
    { name: "Greek", value: "Greek" },
    { name: "Linguistics", value: "Linguistics" },
    { name: "Psychology", value: "Psychology" },
    { name: "History", value: "History" },
  ]);
  const [locations] = useState([
    { name: "Hybrid", value: "Hybrid" },
    { name: "Online", value: "Online" },
    { name: "On Campus", value: "On Campus" },
  ]);

  const [universities] = useState([
    { name: "University of Piraeus", value: "University of Piraeus" },
    {
      name: "National and Kapodistrian University of Athens",
      value: "National and Kapodistrian University of Athens",
    },
    {
      name: "EMP",
      value: "EMP",
    },
    {
      name: "Univesity of West Attica",
      value: "Univesity of West Attica",
    },
    {
      name: "OPA",
      value: "OPA",
    },
    {
      name: "Panteion University",
      value: "Panteion University",
    },
    {
      name: "Aristotle University of Thessaloniki",
      value: "Aristotle University of Thessaloniki",
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
              onChange={handleNameChange}
            />

            {/* Add University */}

            <Dropdown
              value={selectedUniversity}
              options={universities}
              onChange={(e) => setselectedUniversity(e.value)}
              optionLabel="name"
              placeholder="Select University"
              className="w-full mb-3 text-left"
            />

            {/* Add Professors Name */}
            <InputText
              placeholder="Professors Name"
              // value={course.professors[1]}
              onChange={handleProfessorsChange}
            />

            {/* Duration */}
            <InputText
              type="text"
              placeholder="Duration"
              // value={course.duration}
              onChange={handleDurationChange}
            />

            {/* ECTS */}
            <InputText
              keyfilter="int"
              type="text"
              name="ECTS"
              placeholder="ECTS"
              // value={course.ECTS}
              onChange={handleECTSChange}
            />

            {/* Price */}
            <InputText
              keyfilter="int"
              type="text"
              name="price"
              placeholder="Price"
              // value={course.price}
              onChange={handlePriceChange}
            />

            <Dropdown
              value={selectedCity}
              options={locations}
              onChange={(e) => setSelectedCity(e.value)}
              optionLabel="name"
              // onSelect={handleLocationChange}
              placeholder="Select Location"
              className="w-full mb-3 text-left"
            />

            <Dropdown
              value={selectedFields}
              options={categories}
              onChange={(e) => setSelectedFields(e.value)}
              optionLabel="name"
              placeholder="Select Fields"
              className="w-full mb-3 text-left"
            />

            {/* Course Desciption */}

            <InputTextarea
              name="description"
              placeholder="Course Description"
              value={selectedDescription} // Bind the value to selectedDescription
              onChange={handleDescriptionChange} // Use handleDescriptionChange to update selectedDescription
              rows={5}
              cols={300}
            />

            <InputTextarea
              placeholder="Website"
              // value={course.name}
              onChange={handleWebsiteChange}
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

          {/* Buttons */}
          <div className="card flex buttons mt-5 ">
            {/* <Button label="Save Course" type="submit" onClick={handleSave} /> */}
            <Toast ref={toast} />
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

{
  /* <select
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
            </select> */
}

{
  /* Location */
}
{
  /* <select name="mode" value={course.mode} onChange={handleChange}>
              <option value="">Select Location</option>
              <option value="online">Online</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select> */
}

{
  /* Fields */
}
{
  /* <select name="mode" value={course.mode} onChange={handleChange}>
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
            </select> */
}

{
  /* Upload Photo
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
          /> */
}

// {Contact Info
//   <div className="contact-info">
//     <h3>Add Contact Info</h3>
//     <InputText
//       keyfilter="email"
//       placeholder="Email"
//       // value={}
//       onChange={handleContactInfoChange}
//     />
//     <InputText
//       keyfilter="pint"
//       placeholder="Phone"
//       // value={\}
//       onChange={handleContactInfoChange}
//     />

//     <InputText
//       // keyfilter="hex"
//       placeholder="Social Media"
//       // value={course.contactInfo.socialMedia}
//       onChange={handleContactInfoChange}
//     />
//   </div>}
