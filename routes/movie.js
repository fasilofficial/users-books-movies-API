const express = require("express");
const movies = require("../data/movieData");

const movieRouter = express.Router();

movieRouter.get("/", (req, res) => {
  res.status(200).json(movies);
});
movieRouter.get("/movie/:id", (req, res) => {
  let id = req.params.id;
  if (id > 0 && id <= 20) {
    res.status(200).json(movies[req.params.id - 1]);
  }
  res.status(404).json({ message: "Not found" });
});

module.exports = movieRouter;
