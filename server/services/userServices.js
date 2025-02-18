const User = require("../models/User");

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

module.exports = { register };
