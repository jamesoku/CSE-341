const routes = require("express").Router();
const mycontroller = require("../controllers");
routes.get("/", mycontroller.awesome);

module.exports = routes;
