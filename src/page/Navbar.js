import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ title }) => {
  return (
    <nav className="navbar  bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sites">Production Sites</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Production Flow",
};
export default Navbar;
