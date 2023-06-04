const express = require("express");
const bodyValidation = require("../middlewares/body.middleware");
const static = require("../static/const");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.getUsers);

router.post(
  "/",
  bodyValidation(static.USER_POST_SCHEMA),
  userController.postUser
);

module.exports = router;
