import React from "react";

const Search = ({ setSearch }) => {
  const handleSearch = (event) => setSearch(event.target.value);

  return (
    <div className="p-1 border-2 border-blue-600 rounded-md max-w-xl w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto shadow-md bg-white">
      <div className="flex justify-between items-center">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search by name or course..."
          className="flex-grow p-2 h-[45px] md:h-[50px] focus:outline-none text-sm md:text-base"
        />
        <button className="px-4 h-[45px] md:h-[50px] text-xl">🔍</button>
      </div>
    </div>
  );
};

export default Search;
