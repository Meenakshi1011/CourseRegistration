import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courseList");
        setData(response.data);
      } catch (error) {
        console.log("Error fetching courses:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4 md:px-8">
      {data.map((course) => (
        <div
          key={course.courseId}
          className="bg-white shadow-md border border-blue-500 rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.03]"
        >
          {/* Image */}
          <div className="h-40 sm:h-48 md:h-56 w-full overflow-hidden">
            <img
              src={`data:image/jpeg;base64,${course.image}`}
              alt={course.courseName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="p-4 space-y-2 text-gray-800 text-sm sm:text-base">
            <h3 className="text-lg font-semibold text-blue-700">
              {course.courseName} ({course.courseId})
            </h3>
            <p>
              <span className="font-medium">Duration:</span> {course.duration} months
            </p>
            <p>
              <span className="font-medium">Fees:</span> ₹{course.fees}
            </p>
            <p>
              <span className="font-medium">Mentor:</span> {course.mentor}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
