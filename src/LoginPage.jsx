import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // Import the icon
import "./style.css";

const LoginPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="navBar">
        <Link to="/" className="home-button">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>

      {/* Login Form */}
      <div className="login-form">
        <div className="color">
          <h1 className="LoginPost">Login Form</h1>
          <form action="#" method="post">
            <div className="inputWrapper">
              <p>User Name</p>
              <input
                className="input"
                type="text"
                name="user"
                placeholder="User Name"
              />

              <p>Password</p>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="wrapper">
              <button className="loginButton" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
