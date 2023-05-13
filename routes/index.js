const routes = require("express").Router();
const mycontroller = require("../controllers");
const router = require("./contacts");
routes.use("/", require('./swagger'));
router.use('/contacts', require('./contacts'))

module.exports = routes;
