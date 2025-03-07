const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (user) => {
  const { username, email, password } = user;

  try {
    // Input validation
    if (!username || !email || !password) {
      throw new Error("register: data missing required");
    }

    // Unique email verification
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("register: User already exists");

    const newUser = new User({ username, email, password });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

const login = async (userInfo) => {

  const { email, password } = userInfo;
  
  try {
    if (!email || !password) {
      throw new Error("login: data missing required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("login: User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("login: Invalid credentials");
    }

    const accessToken = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION || "1d",
    });

    user._id = user._id.toString();
    return { accessToken, user };
  } catch (error) {
    throw error;
  }
}

module.exports = { register, login };
