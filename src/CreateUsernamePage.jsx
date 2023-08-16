// imported libraries used
// imported React and ReactDOM libraries
// Imported BrowserRouter, Routes, and Route components for client-side-routing
// imported custom components: LandingPage, LoginPage, CreateUsernamPage
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const CreateUsernamePage = () => {
	// state variables are made
	// useSate is managing: name, password, isButtonDisabled, and errorMessage
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	// validation function checks if the input usernames meets criteria
	// criteria is must only contains lower case letters and atleast three numbers
	const validateInput = (input) => {
		const lowercaseInput = input.toLowerCase();
		const numCount = (lowercaseInput.match(/\d/g) || []).length;
		return lowercaseInput === input && numCount >= 3;
	};

	// input change event handler 
	// updates state varaibles base on the input value and validation status
	// manages error message
	const handleInputChange = (e) => {

		// gets current value of the input field triggered the event
		// e is passed as an argument to the event handler
		const inputValue = e.target.value; // refers to HTML element triggered the event and value retrieves current value of the input field

		// stat is kept in sync w/ input value 
		// allows React to manage the input field's value
		setName(inputValue); // updates name state variable w/ current value of input field

		// updates isButtonDisables state variable[
		// validateInput function returns true if input meets criteria
		// false otherwise
		// ! is used to negate result so isButtonDisables becomes true when
		// valid and false when not
		setIsButtonDisabled(!validateInput(inputValue));

		// checks for empty input
		// checks if the input value is empty or consists only of whitespace chars after trimming
		if (inputValue.trim() === "") {
			setErrorMessage(""); // Clear error message when input is empty
		} else if (!validateInput(inputValue)) {
			// if the value is not empty and doesn't meet the validation criteria
			// condition is triggered 
			// error message is set to show the specific validation requirement for the username
			setErrorMessage(
				"Username must be all lowercase with at least three numbers."
			);
		} else {
			// if the input value is not empty
			// meet the validation criteria
			// block is executed
			// error message is cleared
			setErrorMessage("");
		}
	};

	// 
	const handleSubmit = (e) => {
		// prevents default behavior of for submission
		// it would cause the page to relod
		// since using React and client-side routing, 
		// we will handle form submission w/o full page refresh
		e.preventDefault();

		// sends POST request to server running locally on port 3001
		// sends data in the format { name, password } to the server
		// name and password values come from the state variables in the component
		axios
			.post("http://localhost:3001/register", { name, password })
			// if POST request is successful
			// .then callback function is executed
			// result parameter contains response from the server
			.then((result) => {
				console.log(result);
				// uses navigate function to navigate the user to "/login" route
				navigate("/login");
			})
			// if there's an error during the POST request
			// .catch callback function is executed
			// err parameter contains error info
			// logs it to the console
			.catch((err) => console.log(err));
	};

	// this JSX part of the code is the user intergface for the regisgtration form
	// includes various HTML elements, inputs, buttons, and error messages
	// defines visual elements of the page that users interact w/
	// JSX code creates UI for registration page
	// includes: input fields, a registration button, error messages, and navigation links
	// components use various event handlers and state variables
	// manages user interactoins and form submission
	return (
		<div>
			{/* Navigation Bar */}
			<div className="navBar">
				<Link to="/" className="home-button">
					<FontAwesomeIcon icon={faHouse} />
				</Link>
			</div>

			<div className="login-form">
				<h2>Register</h2>

				{/* handleSubmit function is called when the user submits the form by clicking register button*/}
				{/* It triggers the POST request to the server and handles response error accordingly*/}
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type="text"
							placeholder="User Name"
							autoComplete="off"
							name="email"
							className=""
							value={name}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<button type="submit" className="" disabled={isButtonDisabled}>
						Register
					</button>

					{errorMessage && <p className="error-message">{errorMessage}</p>}

					<p>Already Have an Account?</p>
					<p>Let's log you in!</p>

					<Link to="/login" className="link">
						Login
					</Link>
				</form>
			</div>
		</div>
	);
};

export default CreateUsernamePage;
