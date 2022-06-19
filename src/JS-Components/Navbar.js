import React from "react";
import "../CSS-Components/Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const move = useNavigate();

  function Move_Category() {
    move("/categories", { replace: true });
  }

  function Move_Item() {
    move("/newitem", { replace: true });
  }

  function Move_Signup() {
    move("/signup", { replace: true });
  }

  function Move_Profile() {
    move("/profile", { replace: true });
  }

  return (
    <div className="navbar">
      <img src="" alt="Lost and Found" />
      <div onClick={Move_Category}>Categories</div>
      <div onClick={Move_Item}>Add Item</div>
      <div></div>
      <div className="search">
        <input type="text" className="search_bar" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="user">
        <div className="user_true" onClick={Move_Signup}>Sign Up</div>
        <div className="user_false" onClick={Move_Profile}></div>
      </div>
    </div>
  );
}

export default Navbar;
