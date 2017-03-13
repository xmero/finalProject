const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addProduct = require('./handlers/addProduct')

router.get('/', getAll)
router.post('/', addProduct)

module.exports = router
