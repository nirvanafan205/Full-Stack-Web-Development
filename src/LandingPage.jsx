import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
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
    </div>
  );
};

export default LandingPage;
