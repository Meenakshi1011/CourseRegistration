import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = ({ search }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses/enrolled");
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center text-gray-600 mt-10">Loading...</p>;

  const filteredData = data.filter((student) => {
    if (!search) return true;
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.courseName.toLowerCase().includes(search.toLowerCase())
    );
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredData.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(filteredData.length / studentsPerPage);

  const paginate = (page) => setCurrentPage(page);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-3">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200 text-sm md:text-base">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border px-3 py-2 md:px-4">S.No</th>
              <th className="border px-3 py-2 md:px-4">Name</th>
              <th className="border px-3 py-2 md:px-4">Course</th>
              <th className="border px-3 py-2 md:px-4">Email</th>
            </tr>
          </thead>

          <tbody>
            {currentStudents.length > 0 ? (
              currentStudents.map((student, index) => (
                <tr
                  key={student.id || index}
                  className="text-center even:bg-gray-50 hover:bg-gray-100 transition"
                >
                  <td className="border px-3 py-2">{indexOfFirstStudent + index + 1}</td>
                  <td className="border px-3 py-2">{student.name}</td>
                  <td className="border px-3 py-2">{student.courseName}</td>
                  <td className="border px-3 py-2 break-all">{student.emailID}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
        <button
          className="border border-gray-400 rounded px-3 py-1 text-sm md:text-base disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`border border-gray-400 rounded px-3 py-1 text-sm md:text-base transition ${
              currentPage === index + 1
                ? "bg-blue-500 text-white border-blue-500"
                : "hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="border border-gray-400 rounded px-3 py-1 text-sm md:text-base disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
