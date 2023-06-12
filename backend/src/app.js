const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.router");
const userDetailRouter = require("./routes/user_detail.router");
const productRouter = require("./routes/product.route");

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/user_detail", userDetailRouter);
app.use("/product", productRouter);

app.use((error, req, res, next) => {
  // Error logging
  console.log(error);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
