import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const CreateUsernamePage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
              onChange={(e) => setName(e.target.value)}
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

          <button type="submit" className="">
            Register
          </button>

          <p>Already Have an Account</p>

          <Link to="/login" className="link">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateUsernamePage;
