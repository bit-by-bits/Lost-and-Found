import React from "react";
import "../CSS-Components/Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* temporary logo - TO BE CHANGED */}
      {/* leftmost div - containing logo only */}
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShV-TuqQlHIuTrTnsPbti-zjZ2oh0TDAEN8Q&usqp=CAU"
          alt=""
        />
      </div>

      {/* switch b/w pages */}
      <div className="nav-items">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link-div")}
          to="categories"
        >
          Categories
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link-div")}
          to="lost"
        >
          Lost
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link-div")}
          to="found"
        >
          Found
        </NavLink>
      </div>

      {/* search bar */}
      <div className="search" id="search">
        <input type="text" className="search_bar" />
        <FontAwesomeIcon className="icon" icon={faSearch} />
      </div>

      {/* rightmost div - USER */}
      <Link className="link-div" id="signup" to="signup" todo="SIGN UP">
        SIGN UP
      </Link>
    </div>
  );
}

export default Navbar;
