import React, { useState } from "react";
import "../App.css";

function Form() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    gender: "male",
    subject: {
      english: true,
      maths: false,
      physics: false,
    },
    resume: "",
    url: "",
    selectedOption: "",
    about: "",
  });

  const Formchange = (e) => {
    console.log(e);
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        subject: {
          ...prev.subject,
          [name]: checked,
        },
      }));
    } else if (type === "file") {
      setForm((prev) => ({
        ...prev,
        resume: files[0], // store file object
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleReset = () => {
    setForm({
      fname: "",
      lname: "",
      email: "",
      number: "",
      gender: "male",
      subject: {
        english: false,
        maths: false,
        physics: false,
      },
      resume: "",
      url: "",
      selectedOption: "",
      about: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data Save")
    handleReset()
    console.log("Form Data:", form);
  };

  return (
    <div className="flex justify-center gap-[98px]">
      <form className="bg-white shadow-lg rounded-lg p-8  border border-gray-300"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
          Registration Form
        </h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            First Name
          </label>
          <input
            onChange={Formchange}
            name="fname"
            value={form.fname}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Last Name
          </label>
          <input
            onChange={Formchange}
            name="lname"
            value={form.lname}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter last name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            onChange={Formchange}
            type="email"
            name="email"
            value={form.email}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter email"
            required
          />
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Contact
          </label>
          <input
            onChange={Formchange}
            type="number"
            name="number"
            value={form.number}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter contact number"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Gender</label>
          <div className="flex gap-4">
            {["male", "female", "other"].map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={Formchange}
                />
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Your Best Subject
          </label>
          <div className="flex gap-4">
            {["english", "maths", "physics"].map((subj) => (
              <label key={subj} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={subj}
                  checked={form.subject[subj]}
                  onChange={Formchange}
                />
                {subj.charAt(0).toUpperCase() + subj.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Upload Resume
          </label>
          <input
          key={form.resume?form.resume.name:"empty"}
            onChange={Formchange}
            type="file"
            name="resume"
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* URL */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Portfolio URL
          </label>
          <input
            onChange={Formchange}
            type="url"
            name="url"
            value={form.url}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="https://example.com"
            required
          />
        </div>

        {/* Dropdown */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Select Your Choice
          </label>
          <select
            onChange={Formchange}
            name="selectedOption"
            value={form.selectedOption}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select your answer
            </option>
            <optgroup label="Beginers">
              <option value="Html">Html</option>
              <option value="Css">Css</option>
              <option value="JS">JS</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="React">React</option>
              <option value="Node">Node</option>
              <option value="Express">Express</option>
              <option value="MongoDB">MongoDB</option>
            </optgroup>
          </select>
        </div>

        {/* About */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">About</label>
          <textarea
            onChange={Formchange}
            name="about"
            value={form.about}
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Write something about yourself..."
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      <ul className="text-start">
        <li>{form.fname}</li>
        <li>{form.lname}</li>
        <li>{form.email}</li>
        <li>{form.number}</li>
        <li>{form.gender}</li>
        <li>
          {form.subject.english ? "English" : ""}
          {form.subject.maths ? "Maths" : ""}
          {form.subject.physics ? "Physics" : ""}
        </li>
        <li>{form.resume ? form.resume.name : ""}</li>
        <li>{form.url}</li>
        <li>{form.selectedOption}</li>
        <li>{form.about}</li>
      </ul>
    </div>
  );
}

export default Form;
