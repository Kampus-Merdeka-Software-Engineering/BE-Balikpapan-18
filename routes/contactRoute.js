const express = require('express');
const contactController = require('../controllers/contactController');
const contactRouter = express.Router();

// get all contact
contactRouter.get('/', contactController.getcontact);

// crate contact
contactRouter.post('/', contactController.createContact);

module.exports = { contactRouter };
