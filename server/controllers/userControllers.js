const { register, login } = require("../services/userServices");

const registerHandler = async (req, res) => {
  try {
    const user = await register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { accessToken, user } = await login(req.body);

    //Send token with cookie
    res.cookie("token", accessToken, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production", // true en prod
      maxAge: 2 * 60 * 60 * 1000,
    });

    res
      .status(200)
      .header("Access-Control-Allow-Credentials", "true")
      .json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerHandler,
  loginHandler,
};
