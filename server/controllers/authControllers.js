// Auth for front end
const getToken = (req, res) => {
  const token = req.cookies.token;
  if (token) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
};

module.exports = router;
