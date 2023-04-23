import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul class="nav-bar">
      <li class="nav-item">
        <Link to={"/"}>Dashboard</Link>
      </li>
      <li class="nav-item">
        <Link to={"/About"}>About</Link>
      </li>
    </ul>
  );
};

export default NavBar;
