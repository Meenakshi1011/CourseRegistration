import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Search from "../components/Search";
import Table from "../components/Table";

const EnrolledStudents = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-shrink-0" />

      <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="mb-[50px]">
          <Search setSearch={setSearch} />
        </div>
        <Table search={search} />
      </main>

      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default EnrolledStudents;
