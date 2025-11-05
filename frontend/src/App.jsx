import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EnrolledStudents from "./pages/EnrolledStudents";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enrolled-students" element={<LoginPage />} />
          <Route path="/enrolled-studentss" element={<EnrolledStudents />} />

        </Routes>
    </Router>
  );
}

export default App;
