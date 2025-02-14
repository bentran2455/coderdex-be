require("dotenv").config();
const { config } = require("process");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const pokemonRoutes = require("./routes/pokemons");
const indexRoutes = require("./routes/index");

var port = process.env.PORT || "3000";
app.set("port", port);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api", pokemonRoutes);
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
