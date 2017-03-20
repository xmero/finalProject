const express = require('express')
const router = express.Router()

const getMessages = require('./handlers/getMessages')
const getMessageDetails = require('./handlers/getMessageDetails')
const newMessage = require('./handlers/newMessage')
const updateMessage = require('./handlers/updateMessage')

router.get('/:id', getMessages)
router.post('/', newMessage)
router.get('/details/:id',getMessageDetails)
router.put('/update/:id', updateMessage)

module.exports = router
