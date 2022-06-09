const routes = require('express').Router();
const Pokemoncontroller = require("../controllers/PokemonController")
routes.get("/", Pokemoncontroller.getAll);

module.exports = routes;