import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
      <div className="w-full"> 
        <input
          type="text"
          placeholder="Search expenses by name or description"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
           className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default SearchBar;