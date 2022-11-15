const Mongoose = require("mongoose");

const schema = new Mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const UserModel = Mongoose.model("User", schema);

module.exports = UserModel;
