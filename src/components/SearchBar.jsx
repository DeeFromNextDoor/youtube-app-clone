import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={() => {}}>
        <input
          className="search-input"
          placeholder="search..."
          value=""
          onChange={() => {}}
        />
        <button type="submit" className="search-button">
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
