const express = require("express");
const books = require("../data/bookData");

const bookRouter = express.Router();

bookRouter.get("/", (req, res) => {
  res.status(200).json(books);
});
bookRouter.get("/book/:id", (req, res) => {
  let id = req.params.id;
  if (id > 0 && id <= 20) {
    res.status(200).json(books[req.params.id - 1]);
  }
  res.status(404).json({ message: "Not found" });
});

module.exports = bookRouter;
