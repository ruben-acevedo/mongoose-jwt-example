const router = require("express").Router();
const userService = require("../service/userService");

//user
//TODO: Update Route
//TODO: Encrypt password(also search for best module)
//TODO: Implement JOI
//TODO: Implement JWT
//TODO(optional): Search for a better pattern to refactor

router.use("/", (req, res, next) => {
  const date = new Date();
  console.log(`${req.method} at ${date.toLocaleTimeString()}`);
  next();
});

router.get("/user/:_id", async (req, res) => {
  const user = await userService.getUser(req.params._id);
  if (user) res.send(user); //TODO: fix this return
});

router.post("/user", async (req, res) => {
  const newUser = await userService.createUser(req.body);
  res.json(newUser);
});

router.delete("/user/:_id", async (req, res) => {
  await userService.deleteUser(req.params._id);
  res.json({
    status: 200,
    message: "OK",
  });
});

module.exports = router;
