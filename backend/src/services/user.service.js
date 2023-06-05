const db = require("../db");

const userService = {};

userService.getUsersRequest = async function () {
  const result = await db("SELECT * FROM user");
  return result;
};

userService.postUser = async function (
  uid,
  email,
  password,
  username,
  nickname
) {
  await db(
    "INSERT INTO user (uid, email, password, username, nickname) VALUES (?, ?, ?, ?, ?)",
    [uid, email, password, username, nickname]
  );
  return true;
};

userService.updateUser = async function (uid, password, username, nickname) {
  await db(
    `UPDATE user
    SET password = IFNULL(?, password), 
    username = IFNULL(?, username), 
    nickname = IFNULL(?, nickname)
    WHERE uid = ?`,
    [password, username, nickname, uid]
  );
  return true;
};

userService.deleteUser = async function (uid) {
  await db("DELETE FROM user WHERE uid = ?", [uid]);
  return true;
};

module.exports = userService;
