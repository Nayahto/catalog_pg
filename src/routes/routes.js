const routes = require('express').Router();

const Pokemoncontroller = require("../controllers/PokemonController")

routes.get("/", Pokemoncontroller.getAll);
routes.get("/signup",Pokemoncontroller.signup);
routes.post("/",Pokemoncontroller.create);
routes.get("/getById/:id/:method", Pokemoncontroller.getById)

module.exports = routes;