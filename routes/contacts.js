const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

// GET all contacts
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// GET a single contact by id
router.get("/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
});

module.exports = router;
