import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const LandingPage = ({ loggedInUser, setLoggedInUser }) => {
  const handleLogout = () => {
    setLoggedInUser(""); // Log out by setting the loggedInUser to an empty string
  };

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
            <button onClick={handleLogout} className="logoutButton">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
