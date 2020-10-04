import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/react">
          React
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/node">
          Node
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/atomic">
          Atomic
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
