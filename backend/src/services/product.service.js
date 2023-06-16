const db = require("../db");

const productService = {};

productService.getProductsRequest = async function () {
  const result = await db("SELECT * FROM product");
  return result;
};

productService.postProduct = async function (
  uid,
  name,
  desc,
  category,
  price,
  image
) {
  await db(
    "INSERT INTO product (uid, name, desc, category, price, image) VALUES (?, ?, ?, ?, ?, ?)",
    [uid, name, desc, category, price, image]
  );
  return true;
};

module.exports = productService;
