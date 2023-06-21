const userService = require("../services/user.service");

const userController = {};

userController.getUsers = async function (req, res) {
  const users = await userService.getUsersRequest();
  res.status(200).json({
    users: users,
  });
};

userController.getUser = async function (req, res) {
  const { uid } = req.params;
  const user = await userService.getUser(uid);
  res.status(200).json({
    user: user,
  });
};

userController.postUser = async function (req, res) {
  const { uid, email, password, username, nickname } = req.body;
  const result = await userService.postUser(
    uid,
    email,
    password,
    username,
    nickname
  );
  res.status(200).send(result);
};

userController.updateUser = async function (req, res) {
  const { uid } = req.params;
  const { password, username, nickname } = req.body;
  const result = await userService.updateUser(
    uid,
    password,
    username,
    nickname
  );
  res.status(200).send(result);
};

userController.deleteUser = async function (req, res) {
  const { uid } = req.params;
  const result = await userService.deleteUser(uid);
  res.status(200).send(result);
};

module.exports = userController;
