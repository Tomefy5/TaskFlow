const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
app.use(cors());
app.use(express.json());

// Routes

app.use("/api", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected successfully \n");
  })
  .catch((error) => {
    console.log("Error connecting to Mongoose \n", error);
  });

app.listen(port, () => {
  console.log("Server running on: http://localhost:5000 ");
});
