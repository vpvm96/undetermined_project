const productService = require("../services/product.service");

const productController = {};

productController.getProducts = async function (req, res) {
  const products = await productService.getProductsRequest();
  res.status(200).json({
    products: products,
  });
};

productController.postProduct = async function (req, res) {
  const { uid, name, desc, category, price, image } = req.body;
  const result = await productService.postProduct(
    uid,
    name,
    desc,
    category,
    price,
    image
  );
  res.status(200).send(result);
};

module.exports = productController;
