const validationModel = require("../helper/validation.helper");

function bodyValidation(model) {
  if (!model) {
    throw new Error("Model is required");
  }
  return function (req, res, next) {
    const requestBody = req.body;
    const isValidBody = validationModel.asJoiSchema(model, requestBody);
    if (!isValidBody) {
      res.status(400).send({
        message: "Invalid body",
        status: 400,
      });
    }
    next();
  };
}

module.exports = bodyValidation;
