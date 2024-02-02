import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <form className="SearchBar">
        <input className="SearchInput" id="search" name="search" type="text" placeholder="Enter a song title" />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default SearchBar;
