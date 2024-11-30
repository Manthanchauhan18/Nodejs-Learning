const express = require('express')
const router = express.Router()
const {handleUserLogin} = require('../controler/login')

router.post('/',handleUserLogin)

module.exports = router