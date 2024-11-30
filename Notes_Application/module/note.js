const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    note_message: {
        type: String,
    },
    note_title: {
        type: String,
        require: true
    },
    id:{
        type: String,
    }
},{timestamps:true})

const noteModel = mongoose.model('note', noteSchema)

module.exports = noteModel