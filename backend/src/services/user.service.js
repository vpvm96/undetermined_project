const db = require("../db");
const ErrorHelper = require("../helper/error.helper");

const userService = {};

userService.getUsersRequest = async function () {
  const result = await db("SELECT * FROM user");
  return result;
};

userService.getUser = async function (uid) {
  const result = await db(
    `SELECT * 
      FROM user WHERE uid = ?
      JOIN user_detail
      ON user.uid = user_detail.user_id`,
    [uid]
  );
  return result;
};

userService.postUser = async function (
  uid,
  email,
  password,
  username,
  nickname
) {
  // password hash
  await db(
    `INSERT INTO user 
      (uid, email, password, username, nickname) 
        VALUES (?, ?, ?, ?, ?)`,
    [uid, email, password, username, nickname]
  );
  return true;
};

userService.updateUser = async function (uid, password, username, nickname) {
  try {
    // Error handling & Validation model
    await db(
      `UPDATE user
        SET password = IFNULL(?, password), 
          username = IFNULL(?, username), 
          nickname = IFNULL(?, nickname)
        WHERE uid = ?`,
      [password, username, nickname, uid]
    );
    return true;
  } catch (error) {
    const { status, message } = error;
    throw new ErrorHelper(status, message);
  }
};

userService.deleteUser = async function (uid) {
  await db("DELETE FROM user WHERE uid = ?", [uid]);
  return true;
};

module.exports = userService;
