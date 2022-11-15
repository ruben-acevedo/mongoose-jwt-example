const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MY_USER}:${process.env.MY_PWD}@cluster0.8vr49oy.mongodb.net/test`
    );
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("open", () =>
  console.log("Successfully connected to MongoDB.")
);
mongoose.connection.on("error", () =>
  console.log("Could not connect to MongoDB.")
);

module.exports = {
  connect,
};
