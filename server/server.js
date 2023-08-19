// import modules are imported
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");

// instance of express application is created
// assigned it to the app varaible
const app = express();

// two middleware functions used
app.use(express.json()); // middleware parses incoming JSON payloads making it available in req.body for route handlers
app.use(cors()); // enables Cross-Origin resource Charing
// allos frontend to make requests to this server from a different origin

// establishes a connection to the MongoDB data base
// // uses IP address of the local machine 27017 ( default port )
// /Users specifies the name of the database to connect to
mongoose.connect("mongodb://127.0.0.1:27017/Users");

// defins an API Endpoint
// when a POST request is made to /register
// calback function will be executed
app.post("/register", async (req, res) => {
  const { name, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ name });
    if (existingUser) {
      return res.json({ message: "Username already exists", exists: true });
    }

    const newUser = await userModel.create({ name, password });
    return res.json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "asdfasdf" });
  }
});

app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await userModel.findOne({ name, password });
    if (user) {
      res.json("Success");
    } else {
      res.json("Invalid credentials");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// defines an API Endpoint to check if a username exists
app.get("/checkUsername", async (req, res) => {
  const { username } = req.query;
  const existUsername = await userModel.findOne({ username });

  if (existUsername) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});

// starts the server
// listens on port 3001
// callback function will be executed once the server is up and runnign
app.listen(3001, () => {
  console.log("server is running");
});

/*
    Code defines an Express server that listens for POST request on the /register endpoint

  when a request is made, it creates a new user in the MongoDB database using the userModel

  created user is then sent as a JSON response
*/
