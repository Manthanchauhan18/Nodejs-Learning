const express = require('express')
const {handleCreateNewUser, handleGetAllUser} = require('../collections/user')

const router = express.Router()

router.route('/')
.get(handleGetAllUser)
.post(handleCreateNewUser)

module.exports = router