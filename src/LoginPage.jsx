import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./style.css";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        name,
        password,
      });

      if (response.data === "Success") {
        navigate("/"); // Navigate to the home page if login is successful
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="navBar">
        <Link to="/" className="home-button">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      {/* ... (rest of your code) */}

      {/* Login Form */}
      <div className="login-form">
        <div className="color">
          <h1 className="LoginPost">Login Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <p>User Name</p>
              <input
                className="input"
                type="text"
                name="user"
                placeholder="User Name"
                value={name} // Add this line
                onChange={(e) => setName(e.target.value)} // Add this line
              />

              <p>Password</p>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={password} // Add this line
                onChange={(e) => setPassword(e.target.value)} // Add this line
              />
            </div>

            <div className="error-message">
              {errorMessage && <p className="error-text">{errorMessage}</p>}
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
