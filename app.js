const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const routerUsers = require('./routes/users')
const routerProducts = require('./routes/products')

const PORT = process.env.PORT || 3000
const app = express()

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )
const publicFolder = path.join(__dirname, 'public')

const urlDB = 'mongodb://localhost:27017/fproject'
mongoose.connect(urlDB)

app
  .use(express.static(publicFolder))
  .use('/products/api', routerProducts)
  .use('/users/api', routerUsers)


  
  .listen(PORT, () => console.log(`Magic happens on Port ${PORT}...`))