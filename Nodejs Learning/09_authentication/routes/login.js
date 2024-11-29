const express = require('express')
const router = express()
const {handleUserLogin} = require('../collections/login')

console.log("inside login router")

router.route('/')
.post(handleUserLogin)

module.exports = router