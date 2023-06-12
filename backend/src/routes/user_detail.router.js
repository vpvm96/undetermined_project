const express = require("express");
const bodyValidation = require("../middlewares/body.middleware");
const static = require("../static/const");
const user_detailController = require("../controllers/user_detail.controller");

const router = express.Router();

router.get("/", user_detailController.getUserDetail);

router.post(
  "/",
  bodyValidation(static.USER_DETAIL_POST_SCHEMA),
  user_detailController.postDetailUser
);

module.exports = router;
