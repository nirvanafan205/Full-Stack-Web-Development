// importing React and ReactDOM libraryies 
// Used to create react components and rendering components into the DOM
// BrowserRouter, Routes, and Route is used for client-side routing
// LandingPage, LoginPage, CreateUsernamePage is imported to be rendered
import React from "react";
import ReactDOM from "react-dom"; // Correct the import statement
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // components and utilities for client-side routing
import "./style.css";
import CreateUsernamePage from "./CreateUsernamePage";

// serves as the root component of the application
const App = () => {
  return (
    // BrowserRouter used to enable client-side routing
    // Allows to make routes for different URLS w/o a full page refresh
    <BrowserRouter>

      { /* Defined different routes useing the Route component*/}
      { /* Each route has a specific path prop that corresponds to URL*/}
      { /* prop is used to specify the component to render when the URL matches the given path*/}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
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
