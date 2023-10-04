const express = require('express');
const  resiController  = require('../controllers/resiController');
const resiRouter = express.Router();

// get all books
resiRouter.get('/', resiController.getResi);

// crate resi 
resiRouter.post('/',resiController.createResi)

// get resi by no resi
resiRouter.get('/:resiId',resiController.getResiById);

module.exports = {resiRouter};