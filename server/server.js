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
app.post("/register", (req, res) => {
  /*
    creates a new user in the database
    req.body contains data sent w/ POST request
    includes the user's info

    .then() handles successful creation of the user
    responds w/ created user object in JSON format using res.json(user)

    .catch() handles erros and respons w/ error in JSON format using res.json(err)
   */
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
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
