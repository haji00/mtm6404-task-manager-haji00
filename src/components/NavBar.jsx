import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/" className="nav-item">
            Dashboard
          </Link>
        </li>
        <li onMouseEnter={handleMenuToggle} onMouseLeave={handleMenuToggle}>
          <div>
            <Link to="" onClick={handleMenuToggle} className="nav-item">
              My Lists
            </Link>
            {showMenu && (
              <ul className="dropdown">
                <li>
                  <Link to="/list/work" className="nav-item">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/list/groceries" className="nav-item">
                    Groceries
                  </Link>
                </li>
                <li>
                  <Link to="/list/home" className="nav-item">
                    Home
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link to="/" className="nav-item">
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-item">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
