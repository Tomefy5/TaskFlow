const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");

dotenv.config();

// Middleware CORS unique et bien configuré
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser()); // Après CORS, mais avant les routes

// Routes
app.use("/api", taskRoutes);
app.use("/api", userRoutes);

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected successfully \n"))
  .catch((error) => console.log("Error connecting to Mongoose \n", error));

app.listen(port, () => {
  console.log("Server running on: http://localhost:5000 ");
});