const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Contact = require("../models/contact");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const concontrollercontact = require("../controllers/contactscon");

// GET all contacts
router.get("/", concontrollercontact.getallcontacts);

// GET a single contact by id
router.get("/:id", concontrollercontact.getcontact);

//
router.post("/", concontrollercontact.createcontact);

router.put("/:id");

router.delete("/:id");

module.exports = router;
