import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  };
  
  export default SearchBar;