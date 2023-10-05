const express = require("express");
const app = express();
const PORT = 3000;

const userRoute = require("./routes/user");
const movieRoute = require("./routes/movie");
const bookRoute = require("./routes/book");

app.use("/users", userRoute);
app.use("/movies", movieRoute);
app.use("/books", bookRoute);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Something went wrong");
  } else {
    console.log("Server running on http://localhost:" + PORT);
  }
});
