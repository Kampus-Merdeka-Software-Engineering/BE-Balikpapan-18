const express = require('express');
const  resiController  = require('../controllers/resiController');
const resiRouter = express.Router();

// get all books
resiRouter.get('/resi', resiController.getResi);

// get resi by no resi
resiRouter.get('/resi/:resiId',resiController.getResiById);

module.exports = {resiRouter};