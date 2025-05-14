import React from "react";
import "./SearchBar.css";
import { assets } from "../../assets/assets";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="search-contain">
      <input type="text" placeholder="Search Products..." />
      <img onClick={() => setSearch(false)} src={assets.close} />
    </div>
  );
};

export default SearchBar;
