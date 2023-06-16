const express = require("express");
const bodyValidation = require("../middlewares/body.middleware");
const static = require("../static/const");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/", productController.getProducts);

router.post(
  "/",
  bodyValidation(static.PRODUCT_POST_SCHEMA),
  productController.postProduct
);

module.exports = router;
