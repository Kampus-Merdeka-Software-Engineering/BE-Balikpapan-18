const express = require('express')
const axios = require('axios')
const wilayahController = require('../controllers/wilayahController')
const wilayahRouter = express.Router()

// Config Defaults Axios dengan Detail Akun Rajaongkir
axios.defaults.baseURL = 'https://api.rajaongkir.com/starter'
axios.defaults.headers.common['key'] = '1442930960a35d0470229d0a4ff53a24'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


wilayahRouter.get('/provinsi',wilayahController.getProvince)

// wilayahRouter GET city by province_id
wilayahRouter.get('/kota/:provId',wilayahController.getCity)

// wilayahRouter GET costs
wilayahRouter.get('/cost/:origin/:destination/:weight/:courier',wilayahController.getCost)


module.exports = {wilayahRouter}