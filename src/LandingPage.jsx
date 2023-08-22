import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./style.css";

const LandingPage = ({ loggedInUser, setLoggedInUser }) => {
  const [loggedInUserCount, setLoggedInUserCount] = useState(0); // Initialize loggedInUserCount
  const [errorMessage, setErrorMessage] = useState(""); // Initialize errorMessage
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(""); // Log out by setting the loggedInUser to an empty string
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        name,
        password,
      });

      if (response.data === "Success") {
        const userResponse = await axios.get(
          `http://localhost:3001/getUserCount/${name}`
        );
        const userCount = userResponse.data.count; // Retrieve user's count from the response
        setLoggedInUserCount(userCount); // Update the user's count
        setLoggedInUser(name);
        navigate("/");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  const handleIncrementCount = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/incrementCount/${loggedInUser}`
      );

      if (response.data.success) {
        setLoggedInUserCount((prevCount) => prevCount + 1); // Increment the count in state
      }
    } catch (error) {
      console.error("Error incrementing count:", error);
    }
  };

  useEffect(() => {
    // Fetch and update user count when the component mounts
    const fetchUserCount = async () => {
      try {
        const userResponse = await axios.get(
          `http://localhost:3001/getUserCount/${loggedInUser}`
        );
        const userCount = userResponse.data.count;
        setLoggedInUserCount(userCount);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    if (loggedInUser) {
      fetchUserCount();
    }
  }, [loggedInUser]); // Run this effect whenever loggedInUser changes

  return (
    <div className="intro">
      <h1>Welcome to Lab 3!</h1>
      <h2>
        Let's figure out who you are, login in or create a username please!
      </h2>

      <div className="buttonContainer">
        <Link to="/login" className="button">
          <FontAwesomeIcon icon={faUser} /> Login
        </Link>

        <Link to="/createUsername" className="button">
          Create Account <FontAwesomeIcon icon={faUserPlus} />
        </Link>
      </div>
      <div className="gradient"></div>
      <div>
        {loggedInUser && (
          <div>
            <h1>Hello {loggedInUser}!</h1>
            <p>Your count: {loggedInUserCount}</p>
            <button onClick={handleIncrementCount} className="incrementButton">
              Increment Count
            </button>
            <button onClick={handleLogout} className="logoutButton">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        )}

        {errorMessage && (
          <div className="error-message">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
