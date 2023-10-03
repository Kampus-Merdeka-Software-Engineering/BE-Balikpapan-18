const express = require('express');
const  resiController  = require('../controllers/resiController');
const resiRouter = express.Router();

// get all books
resiRouter.get('/resi', resiController.getResi);

module.exports = {resiRouter};