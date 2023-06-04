const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.router");

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
