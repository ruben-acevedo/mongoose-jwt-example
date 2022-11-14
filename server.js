require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const loginRouter = require("./src/routes/loginRouter");
const db = require("./config/config");

app.use(express.json());
app.use("/", loginRouter);

db.connect().then(() =>
  app.listen(PORT, () =>
    console.log(`mongoose-jwt-example listening on port ${PORT}!`)
  )
);
