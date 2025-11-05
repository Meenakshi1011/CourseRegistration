import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/courses/enrolled/login", {
        username: name,
        password: password,
      });

      if (response.status === 200) {
        navigate("/enrolled-studentss");
      }
      setName("");
      setPassword("");
    } catch (error) {
      console.log("Invalid credentials", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-blue-500 rounded-2xl shadow-lg p-8 w-[400px] flex flex-col space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-700">Admin Login</h2>

        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />

        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
