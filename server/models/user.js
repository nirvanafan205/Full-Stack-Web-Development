// import Mongoose library
// used to work with MongoDB in a strucuted and object-oriented way
const mongoose = require("mongoose");

// defines a Mongoose scheme named userSchema
// schema is a blueprint for how the data should be structured in the database collection
// defines two fields: name and password, both of which are a type of string
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});

// mongoose.model function is used to create a model for a MongoDB collection based on the schema
// model is named userModel and corresponds to the users collection
// first argument is the name of the collection
// second argument is the schema that defines the strucute of the documents in the collection
const userModel = mongoose.model("users", userSchema);

//exportts the userModel so that it can be used in other parts of the lab
// allos other modules to interact with the users collection using the defined schema and model
module.exports = userModel;

/*
 
 	This code defines a Mongoose schema for users collection w/ fields for the user's name and password

	creates a model based on this schema and exports it for use in other parts of the application

	allows CRUD ( Create, Read, Update, Delete) operation to be performed on the 
	users collection using a structured and consistent API
*/
