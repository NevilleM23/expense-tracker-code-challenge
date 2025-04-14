import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
           className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default SearchBar;