const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const userModel = require("./models/user");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Users");

// Define an async function to handle the increment count action
const handleIncrementCount = async (username) => {
  try {
    const user = await userModel.findOne({ name: username });

    if (!user) {
      console.error("User not found");
      return false;
    }

    user.count += 1;
    await user.save();
    return true;
  } catch (error) {
    console.error("Error incrementing count:", error);
    return false;
  }
};

app.post("/register", async (req, res) => {
  const { name, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ name });
    if (existingUser) {
      return res.json({ message: "Username already exists", exists: true });
    }

    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds); // Generate hashed password

    const newUser = await userModel.create({
      name,
      password: hashedPassword,
      count: 1, // Initialize count to 1
    });

    return res.json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await userModel.findOne({ name });

    if (!user) {
      return res.json("Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.json("Success");
    } else {
      res.json("Invalid credentials");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.post("/incrementCount/:username", async (req, res) => {
  const { username } = req.params;
  const success = await handleIncrementCount(username);

  if (success) {
    res.json({ success: true });
  } else {
    res.status(500).json({ success: false });
  }
});

app.get("/checkUsername", async (req, res) => {
  const { username } = req.query;
  const existUsername = await userModel.findOne({ name: username });

  if (existUsername) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});

app.get("/getUserCount/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await userModel.findOne({ name: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json({ count: user.count });
  } catch (error) {
    console.error("Error fetching user count:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
