const userDetailService = require("../services/user_detail.service");

const userDetailController = {};

userDetailController.getUserDetail = async (req, res) => {
  const userDetail = await userDetailService.getUserDetail();
  res.status(200).json({
    userDetail: userDetail,
  });
};

userDetailController.postDetailUser = async function (req, res) {
  const { id, adress, phone_number, gender, user_id } = req.body;
  const result = await userDetailService.postDetailUser(
    id,
    adress,
    phone_number,
    gender,
    user_id
  );
  res.status(200).send(result);
};

module.exports = userDetailController;
