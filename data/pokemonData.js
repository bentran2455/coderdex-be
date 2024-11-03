const fs = require("fs");
let pokemonData;

const data = fs.readFileSync("data/data.json", "utf8");
pokemonData = JSON.parse(data).data;

module.exports = pokemonData;
