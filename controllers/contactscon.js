const Contact = require("../models/contact");

concontrollercontact = {};

concontrollercontact.getallcontacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

concontrollercontact.getcontact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
};

concontrollercontact.createcontact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });
    res.status(201).json({ id: newContact._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

concontrollercontact.updatecontact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, favoriteColor, birthday },
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

concontrollercontact.deletecontact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = concontrollercontact;
