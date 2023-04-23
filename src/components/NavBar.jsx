import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav-bar">
        <li className="nav-item"><Link to={"/"}>Dashboard</Link></li>
        <li className="nav-item"><Link to={"/About"}>About</Link></li>
    </ul>
  );
};

export default NavBar;