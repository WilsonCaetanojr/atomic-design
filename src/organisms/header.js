import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../molecules/navbar";
import SearchKeyword from "../molecules/searchKeyword";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Navbar />
      <SearchKeyword />
    </nav>
  );
};

export default Header;
