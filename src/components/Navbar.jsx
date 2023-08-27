import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
