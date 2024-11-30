const express = require('express')
const {handleCreateNewUser, handleGetAllUser,handleUserLogin, handleDeleteUserById} = require('../collections/user')

const router = express.Router()

console.log("inside user router ")

router.route('/')
.get(handleGetAllUser)
.post(handleCreateNewUser)

router.route('/:id')
.delete(handleDeleteUserById)



module.exports = router