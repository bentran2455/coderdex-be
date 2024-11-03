require("dotenv").config();
const { config } = require("process");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const pokemonRoutes = require("./routes/pokemons");
const indexRoutes = require("./routes/index");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api", pokemonRoutes);
app.use("/", indexRoutes);

module.exports = app;
