import React from "react";
import ReactDOM from "react-dom"; // Correct the import statement
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </Router>
  );
};

// Render the app component using ReactDOM.render
ReactDOM.render(<App />, document.getElementById("root"));
