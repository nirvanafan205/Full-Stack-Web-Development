import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
      <div className="login-form">
        <div className="color">
          <h1 className="LoginPost">Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <p>User Name</p>
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

            <div className="inputWrapper">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUsernamePage;
