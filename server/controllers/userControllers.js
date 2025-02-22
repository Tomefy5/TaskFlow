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
    sameSite: "none", 
    secure: true,    
    maxAge: 2 * 60 * 60 * 1000,
});


    res
      .status(200)
      .json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logoutHandler = (req, res) => {
  try {
    res.clearCookie("token", {
      path: "/", // Même chemin que lors de la création
      secure: true, // Si utilisé en HTTPS
      sameSite: "strict", // Si défini initialement
    });
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerHandler,
  loginHandler,
  logoutHandler,
};
