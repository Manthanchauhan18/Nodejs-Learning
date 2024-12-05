const express = require('express')
const router = express.Router()
const {handleUserLogin} = require('../controller/login')

router.post('/',handleUserLogin)

module.exports = router