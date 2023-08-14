import React from "react";
import ReactDOM from "react-dom"; // Correct the import statement
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // components and utilities for client-side routing
import "./style.css";
import CreateUsernamePage from "./CreateUsernamePage";

const App = () => {
  return (
    <BrowserRouter>
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
