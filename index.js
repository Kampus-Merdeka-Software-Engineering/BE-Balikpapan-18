const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

// Router
const {wilayahRouter} = require('./routes/wilayahRoute')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Definisikan Router pada path "/api"
app.use('/', wilayahRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))