const express = require('express')
const router = express.Router()
const {handleGetAllUsers,handleCreateUser} = require('../controler/user')

router.get('/',handleGetAllUsers)
router.post('/',handleCreateUser)

module.exports = router