import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-300 h-16 flex justify-center items-center bg-gray-50 shadow-inner">
      <Link
        to="/"
        className="flex items-center justify-center px-8 border-r-2 border-gray-300 text-blue-600 h-full font-medium hover:bg-blue-50 transition"
      >
        Home
      </Link>
      <Link
        to="/enrolled-students"
        className="flex items-center justify-center px-8 text-blue-600 h-full font-medium hover:bg-blue-50 transition"
      >
        Enrolled Students
      </Link>
    </div>
  );
};

export default Footer;
