import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar({ onSearch, big }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="w-full relative">
      <BiSearch
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 ${
          big ? "text-3xl" : "text-xl"
        }`}
      />
      <input
        type="text"
        placeholder="Search for memes..."
        value={query}
        onChange={handleChange}
        className={`w-full pl-20 pr-6 border border-gray-300 rounded-3xl shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent text-gray-700 placeholder-gray-400 ${
          big ? "text-3xl py-5" : "text-xl py-3"
        }`}
      />
    </div>
  );
}
