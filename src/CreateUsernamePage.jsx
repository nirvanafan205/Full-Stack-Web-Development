import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const CreateUsernamePage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

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
