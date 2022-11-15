const UserModel = require("../../config/userModel");

const getUser = async (_id) => {
  try {
    const user = await UserModel.find({ _id: _id });
    return user;
  } catch (err) {
    throw err;
  }
};

const createUser = async (newUser) => {
  try {
    const user = new UserModel(newUser);
    await user.save();
    return {
      status: 200,
      id: user._id,
    };
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (_id) => {
  try {
    await UserModel.deleteOne({ _id: _id });
    return true;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createUser,
  deleteUser,
  getUser,
};
