const db = require("../db");
const ErrorHelper = require("../helper/error.helper");

const userDetailService = {};

userDetailService.getUserDetail = async function () {
  const result = await db("SELECT * FROM user_detail");
  return result;
};

userDetailService.postDetailUser = async function (
  id,
  adress,
  phone_number,
  gender,
  user_id
) {
  await db(
    `INSERT INTO user_test.user_detail
      (id, adress, phone_number, gender, user_id)
        VALUES (?, ?, ?, ?, ?)`,
    [id, adress, phone_number, gender, user_id]
  );
  return true;
};

module.exports = userDetailService;
