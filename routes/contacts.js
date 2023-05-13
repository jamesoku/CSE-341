const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Contact = require("../models/contact");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const concontrollercontact = require("../controllers/contactscon");

// GET all contacts
router.get("/", concontrollercontact.getallcontacts);

router.post("/", concontrollercontact.createcontact);

// GET a single contact by id
router.get("/:id", concontrollercontact.getcontact);

router.put("/:id", concontrollercontact.updatecontact);

router.delete("/:id", concontrollercontact.deletecontact);

module.exports = router;
