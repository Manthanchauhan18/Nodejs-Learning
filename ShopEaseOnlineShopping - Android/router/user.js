const express = require('express')
const {handleUserSignup, handleUserLogin} = require('../controller/user')

const router = express.Router()

router.post('/login',handleUserLogin)
router.post('/signup',handleUserSignup)

module.exports = router