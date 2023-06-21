const Joi = require("joi");

const validationModel = {};

validationModel.userSchema = {
  uid: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
  nickname: Joi.string().required(),
};

validationModel.asJoiSchema = function (model, target) {
  if (typeof model !== "string") {
    throw new Error(`Expected model to be a string, got ${typeof model}`);
  }
  const isValidateModel = Joi.object(validationModel[model]).validate(target);
  return isValidateModel;
};

module.exports = validationModel;
