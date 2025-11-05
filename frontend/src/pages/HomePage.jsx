import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Form from "../components/Form";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-shrink-0" />

      <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 md:p-8">
        <h2 className="text-blue-600 text-xl sm:text-2xl font-semibold mb-6 sm:mb-10 text-center sm:text-left">
          Available Courses
        </h2>

        {/* Cards */}
        <div className="mb-10 sm:mb-16">
          <Card />
        </div>

        {/* Registration Form */}
        <Form />
      </main>

      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default HomePage;
