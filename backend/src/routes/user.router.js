const express = require("express");
const bodyValidation = require("../middlewares/body.middleware");
const static = require("../static/const");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.getUsers);

router.get("/:uid", userController.getUser);

router.post(
  "/",
  bodyValidation(static.USER_POST_SCHEMA),
  userController.postUser
);

router.patch(
  "/:uid",
  bodyValidation(static.USER_UPDATE_SCHEMA),
  userController.updateUser
);

router.delete(
  "/:uid",
  bodyValidation(static.USER_DELETE_SCHEMA),
  userController.deleteUser
);

module.exports = router;
