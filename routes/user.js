const express = require("express");
const users = require("../data/userData");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json(users);
});
userRouter.get("/user/:id", (req, res) => {
  let id = req.params.id;
  if (id > 0 && id <= 20) {
    res.status(200).json(users[req.params.id - 1]);
  }
  res.status(404).json({ message: "Not found" });
});

module.exports = userRouter;
