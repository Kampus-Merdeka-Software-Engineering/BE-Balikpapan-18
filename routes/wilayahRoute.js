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



// // Router GET province
// wilayahRouter.get('/provinsi', (req, res) => {
//   axios.get('/province')
//     .then(response => res.json(response.data))
//     .catch(err => res.send(err))
// })

// // wilayahRouter GET city by province_id
// wilayahRouter.get('/kota/:provId', (req, res) => {
//   const id = req.params.provId
//   axios.get(`/city?province=${id}`)
//     .then(response => res.json(response.data))
//     .catch(err => res.send(err))
// })

// // wilayahRouter GET costs
// wilayahRouter.('/ongkos/:asal/:tujuan/:berat/:kurir', (req, res) => {
//   const param = req.params
//   axios.post('/cost', {
//       origin: param.asal,
//       destination: param.tujuan,
//       weight: param.berat,
//       courier: param.kurir
//     })
//     .then(response => res.json(response.data))
//     .catch(err => res.send(err))
// })


module.exports = {wilayahRouter}