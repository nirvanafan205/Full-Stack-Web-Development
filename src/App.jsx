// importing React and ReactDOM libraryies
// Used to create react components and rendering components into the DOM
// BrowserRouter, Routes, and Route is used for client-side routing
// LandingPage, LoginPage, CreateUsernamePage is imported to be rendered
import React, { useState } from "react";
import ReactDOM from "react-dom"; // Correct the import statement
import { BrowserRouter, Routes, Route } from "react-router-dom"; // components and utilities for client-side routing
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import CreateUsernamePage from "./CreateUsernamePage";
import "./style.css";

// serves as the root component of the application
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  return (
    // BrowserRouter used to enable client-side routing
    // Allows to make routes for different URLS w/o a full page refresh
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage setLoggedInUser={setLoggedInUser} />}
        />
        <Route path="/createUsername" element={<CreateUsernamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

// Render the app component using ReactDOM.render
ReactDOM.render(<App />, document.getElementById("root"));

/*
  Code sets up routing for React application using 'react-router-dom'
  Defines routs to differnt links and associates each route with a specific component to render
*/
