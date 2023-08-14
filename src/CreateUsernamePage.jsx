import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // Import the icon
import "./style.css";

const CreateUsernamePage = () => {
  return (
    <div className="navBar">
      <h2>Registration Page</h2>
      <Link to="/" className="home-button">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      {/* Add your login form or other content here */}
    </div>
  );
};

export default CreateUsernamePage;
