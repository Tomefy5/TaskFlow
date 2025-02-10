const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const authRouter = require("./routes/auth");
const questionsRouter = require("./routes/questions");
const answersScore = require("./routes/answersScore");
const gameEvent = require("./routes/gameEvent");

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api", authRouter);
app.use("/api", questionsRouter);
app.use("/api", answersScore);
app.use("/api", gameEvent);

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
