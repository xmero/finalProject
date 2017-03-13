const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addUser = require('./handlers/addUser')
const getUser = require('./handlers/getUser')


router.get('/', getAll)
router.post('/', addUser)
router.get('/:id', getUser)

module.exports = router
