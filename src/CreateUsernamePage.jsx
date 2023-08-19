import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const CreateUsernamePage = () => {
  // state variables are made
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // validation function checks if the input usernames meets criteria
  const validateInput = (input) => {
    const lowercaseInput = input.toLowerCase();
    const numCount = (lowercaseInput.match(/\d/g) || []).length;
    return lowercaseInput === input && numCount >= 3;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    setIsButtonDisabled(!validateInput(inputValue));

    if (inputValue.trim() === "") {
      setErrorMessage(""); // Clear error message when input is empty
    } else if (!validateInput(inputValue)) {
      setErrorMessage(
        "Username must be all lowercase with at least three numbers."
      );
    } else {
      setErrorMessage(""); // Clear error message when input meets the criteria
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/register", {
        name,
        password,
      });
      console.log(response.data);

      if (response.data.exists) {
        setErrorMessage(response.data.message);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setErrorMessage("An error occurred while registering.");
    }
  };

  return (
    <div>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <h1>Welcome</h1>

          <div className="input-container">
            <input
              type="text"
              placeholder="User Name"
              autoComplete="off"
              id="userName"
              name="username"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              id="passWord"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="error-message">
            {errorMessage && <p className="error-text">{errorMessage}</p>}
          </div>

          <button type="submit" disabled={isButtonDisabled}>
            Register
          </button>

          <Link to="/" className="home-link">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateUsernamePage;
