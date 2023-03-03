import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/authors" className="navbar-brand">
          Authors
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/authors" className="nav-link">
              All Authors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/authors/new" className="nav-link">
              New Author
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
