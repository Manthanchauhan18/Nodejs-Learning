const express = require('express')
const {handleUserSignup, handleUserLogin, handleGetAllUsers} = require('../controller/user')

const router = express.Router()

router.post('/login',handleUserLogin)
router.post('/signup',handleUserSignup)
router.get('/users',handleGetAllUsers)

module.exports = router