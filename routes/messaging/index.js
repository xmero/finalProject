const express = require('express')
const router = express.Router()

const getMessages = require('./handlers/getMessages')
const getSentMessages = require('./handlers/getSentMessages')
const getMessageDetails = require('./handlers/getMessageDetails')
const newMessage = require('./handlers/newMessage')
const updateMessage = require('./handlers/updateMessage')

router.get('/:id', getMessages)
router.get('/sent/:id', getSentMessages)
router.post('/', newMessage)
router.get('/details/:id',getMessageDetails)
router.put('/update/:id', updateMessage)

module.exports = router
