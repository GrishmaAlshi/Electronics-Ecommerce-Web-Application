import React from "react";
import Logo from "../../images/logo.jpeg";
import { Link } from "react-router-dom";
import "../Styles/AdminNavbar.css";
import "./index.css";

const AdminNavbar = (selected) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link selected" to="/admin/add" exact="true">
                Add
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/admin/update" exact="true">
                Update
              </Link>
            </li>
          </ul>
        </div>
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={Logo} className="navbar-logo" width="50"></img>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
