require("dotenv").config();
const { config } = require("process");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const hostname = "localhost";
const pokemonRoutes = require("./routes/pokemons");

app.use(cors({ origin: "https://coderdex-express.netlify.app/" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api", pokemonRoutes);

app.listen(port, hostname, () => {
  console.log(">>> running on port", port);
});
