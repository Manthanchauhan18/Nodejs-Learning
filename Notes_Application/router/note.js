const express = require('express')
const {handleGetAllNotes, handleCreateNewNote, handleUpdateNote} = require('../controller/note')

const router = express.Router()

router.get('/',handleGetAllNotes)
router.post('/create',handleCreateNewNote)
router.patch('/update/:id',handleUpdateNote)

module.exports = router