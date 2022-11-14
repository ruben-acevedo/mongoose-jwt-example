const loginRouter = require("express").Router();

loginRouter.get("/login", (req, res) => {
  res.send("Hello World!");
});

module.exports = loginRouter;
