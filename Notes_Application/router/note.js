const express = require('express')
const {handleGetAllNotes, handleCreateNewNote, handleUpdateNote, handleDeleteNote} = require('../controller/note')

const router = express.Router()

router.get('/',handleGetAllNotes)
router.post('/create',handleCreateNewNote)
router.patch('/update/:id',handleUpdateNote)
router.delete('/delete/:id',handleDeleteNote)

module.exports = router