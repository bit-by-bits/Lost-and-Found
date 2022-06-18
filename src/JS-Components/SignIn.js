import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import "../CSS-Components/SignIn.css";

function SignIn(props) {
  return (
    <div className="sign_in">
      <div className="box">
        <div className="select">
          <span className={props.todo === "SIGN IN" ? "inactive-option" : ""}>
            <Link
              className={props.todo === "SIGN IN" ? "inactive-option-link" : ""}
              to="/signin"
            >
              SIGN IN
            </Link>
          </span>
          <span className={props.todo === "SIGN UP" ? "inactive-option" : ""}>
            <Link
              className={props.todo === "SIGN UP" ? "inactive-option-link" : ""}
              to="/signup"
            >
              SIGN UP
            </Link>
          </span>
        </div>

        <div className="form">
          <div
            className="form-ele"
            style={{ display: props.todo === "SIGN UP" ? "flex" : "none" }}
          >
            <label htmlFor="">USERNAME</label>
            <input type="name" placeholder="Enter your username" />
          </div>

          <div className="form-ele">
            <label htmlFor="">EMAIL</label>
            <input type="email" placeholder="Enter your email ID" />
          </div>

          <div className="form-ele">
            <label htmlFor="">PASSWORD</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="btn">{props.todo}</div>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default SignIn;
