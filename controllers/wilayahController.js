const wilayahService = require('../services/wilayahService')
const axios = require('axios')

async function getProvince(req,res){
    axios.get('/province')
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
}
async function getCity(req,res){
    const id = req.params.provId
    axios.get(`/city?province=${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))

}
async function getCost(req,res){
    const param = req.params
    axios.post('/cost', {
        origin: param.origin,
        destination: param.destination,
        weight: param.weight,
        courier: param.courier
        })
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
}





module.exports = {getProvince,getCity,getCost}