const express = require('express')
const router = express.Router()

const mailer = require('./handlers/mailer')

router.post('/', mailer)

module.exports = router
