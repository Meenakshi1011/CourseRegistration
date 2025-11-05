import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [name, setName] = useState("");
  const [emailID, setEmailID] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courseList");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching course list:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/course/register", {
        name,
        emailID,
        courseName: selectedCourse,
      });
      alert("Registration successful! Check your email.");
      setSelectedCourse("");
      setName("");
      setEmailID("");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center py-10 px-4 bg-gray-50">
      <div className="w-full sm:w-[400px] md:w-[500px] bg-white border-2 border-blue-500 shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">
          Course Registration
        </h2>
        <p className="text-gray-600 text-sm text-center">
          Fill in your details below to enroll in a course.
        </p>

        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />

        <input
          type="email"
          placeholder="Enter your email address"
          value={emailID}
          onChange={(e) => setEmailID(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />

        <select
          onChange={(e) => setSelectedCourse(e.target.value)}
          value={selectedCourse}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-700"
          required
        >
          <option value="">Select a course</option>
          {courses.map((option, index) => (
            <option key={index} value={option.courseName}>
              {option.courseName}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Form;
