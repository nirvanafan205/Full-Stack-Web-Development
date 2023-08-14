//******Import Statements*******
import React from "react";
import { createRoot } from "react-dom/client"; // rool-lvl rendering
import "./style.css";

const App = () => {
  return <div>Hello, World!</div>;
};

// finds an HTML elment with the id "root"
const container = document.getElementById("root");

// createRoot create a new root for rendering
const root = createRoot(container);

// render method of the root is called with the 'App' component as its argument
// renders the entier application
root.render(<App />);

/*
    sets up a React application with routing and data fetching capabilities 
    using React Router and React Query
*/
