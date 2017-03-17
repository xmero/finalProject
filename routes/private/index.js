const express = require('express');
const router = express.Router();

const passport = require('../_passport')

const editUser = require('./handlers/editUser')

// all these routes require JWT token
router.use( passport.authenticate('jwt', { session: false }) )

router.put("/edit/:id", editUser );

module.exports = router;  