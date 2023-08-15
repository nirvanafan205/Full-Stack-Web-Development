import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const CreateUsernamePage = () => {

	// username
	const [username, setUsername] = useState("");
	const [isUsernameValid, setIsUsernameValid] = useState(true);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	// password
	const [password, setPassword] = useState("");
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const [showPasswordErrorMessage, setShowPasswordErrorMessage] = useState(false);

	const handleUsernameChange = (event) => {
		const newUsername = event.target.value;

		// Validate the username
		const isValid = /^[a-z]*\d{3,}$/.test(newUsername);

		// set state values
		setUsername(newUsername);
		setIsUsernameValid(isValid);


		setShowErrorMessage(!isValid && newUsername !== "");

		// Validate the username
		const lowercaseLettersOnly = /^[a-z]+$/.test(newUsername);
		const atLeastThreeNumbers = (newUsername.match(/\d/g) || []).length >= 3;
		setIsUsernameValid(lowercaseLettersOnly && atLeastThreeNumbers);
	};

	const handlePasswordChange = (event) => {
		const newPassword = event.target.value;
	  
		// Validate the password
		const lowercaseLettersOnly = /^[a-z]+$/.test(newPassword);
		const atLeastOneNumber = /\d/.test(newPassword);
		const atLeastOneSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword);
		const isValid = lowercaseLettersOnly && atLeastOneNumber && atLeastOneSpecialCharacter;
	  
		// Set state values
		setPassword(newPassword);
		setIsPasswordValid(isValid);
		setShowPasswordErrorMessage(!isValid);
	  };
	  
  



	const handleSubmit = (event) => {
		event.preventDefault();

		if(!isUsernameValid) {
			return;
		}
	};

	return (
		<div>
		{/* Navigation Bar */}
		<div className="navBar">
		<Link to="/" className="home-button">
		<FontAwesomeIcon icon={faHouse} />
		</Link>
		</div>``

		{/* Login Form */}
		<div className="login-form">
		<div className="color">
		<h1 className="LoginPost">Registration</h1>
		<form action="#" method="post">
		<div className="inputWrapper" >
		<p>User Name</p>

		<input 
		className={`input${!isUsernameValid ? "invalid": ""}`}
		type="text" 
		name="user" 
		placeholder="User Name" 
		value={username}
		onChange={handleUsernameChange}
		/>

		<p>Password</p>
		<input 
		className={`input${!isPasswordValid ? " invalid" : ""}`}
		type="password" 
		name="password" 
		placeholder="Password"
		value={password}
		onChange={handlePasswordChange}
		/>
		</div>

		{showErrorMessage && (
			<p className="error-message">
			User name must contain only lowercase letters and at least three numbers.
			</p>
		)}

		{showPasswordErrorMessage && (
			<p className="error-message">
			Password must contain lowercase letters, at least one number, and one special character.
			</p>
		)}

		<div className="wrapper">
		<button className="loginButton" type="submit">Login</button>
		</div>

		</form>
		</div>
		</div>
		</div>
	);
};

export default CreateUsernamePage;
