import { React, useState } from "react";
import axios from "axios";
import "./FormFill.css";

function FormFill() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resumePath, setResumePath] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object to handle file upload
      const formData = new FormData();

      // convert subjects object to string
      const selectedSubjects = Object.entries(subjects)
        .filter(([_, selected]) => selected)
        .map(([subject]) => subject)
        .join(", ");

      // Create JSON object with form data
      const userData = {
        firstName,
        lastName,
        email,
        contact,
        gender,
        subjects: selectedSubjects,
        url,
        selectedOption,
        about,
      };

      // Append JSON data as a blob to the formData
       formData.append(
         "userData",
         new Blob([JSON.stringify(userData)], {
           type: "application/json",
         })
       );

      // Append the resume file
      if (resumePath) {
        formData.append("resumePath", resumePath);
      } else {
        alert("Please select a file.");
        return;
      }

      // Send POST request to the server
      const response = await axios.post(
        "http://localhost:8080/user/save",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      //log formData
      console.log(formData);

      // Handle success
      if (response.status === 200) {
        alert("Form submitted successfully!");
        handleReset();
      }

    }
    catch (error) {
      console.error("Error:", error);
      alert("Network error. Please check your connection.");
    }
  };

  // Handle subject checkbox change
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  // Reset form fields
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResumePath("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />

          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />

          <label htmlFor="email">Enter Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <label htmlFor="contact">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />

          <label htmlFor="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          /> Male
             {/* <label htmlFor="male">Male</label> */}
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          /> Female
          
          {/* <label htmlFor="female">Female</label> */}

          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          /> Other
          {/* <label htmlFor="other">Other</label> */}

          <label htmlFor="subjects">Your best Subject</label>
          <input
            type="checkbox"
            name="subjects"
            id="english"
            checked={subjects.english}
            onChange={() => handleSubjectChange("english")}
          /> English
          {/* <label htmlFor="english">English</label> */}

          <input
            type="checkbox"
            name="subjects"
            id="maths"
            checked={subjects.maths}
            onChange={() => handleSubjectChange("maths")}
          /> Maths
          {/* <label htmlFor="maths">Maths</label> */}

          <input
            type="checkbox"
            name="subjects"
            id="physics"
            checked={subjects.physics}
            onChange={() => handleSubjectChange("physics")}
          /> Physics
          {/* <label htmlFor="physics">Physics</label> */}

          <label htmlFor="resumePath">Upload Resume*</label>
          <input
            type="file"
            name="resumePath"
            id="resumePath"
            onChange={(e) => setResumePath(e.target.files[0])}
            required
          />

          <label htmlFor="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            required
          />

          <label htmlFor="select">Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              Select your Ans
            </option>
            <optgroup label="Beginners">
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="React">React</option>
              <option value="Node">Node</option>
              <option value="Express">Express</option>
              <option value="MongoDB">MongoDB</option>
            </optgroup>
          </select>

          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            value={about}
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About yourself"
            required
          ></textarea>

          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default FormFill;
