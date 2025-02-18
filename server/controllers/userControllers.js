const { register } = require("../services/userServices");

const registerHandler = async (req, res) => {
  try {
    const user = await register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
 
module.exports = {
    registerHandler,
}; 
