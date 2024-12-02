const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    android_id:{
        type: String,
        require: true
    },
    notesBody:[{
        note_message: {
            type: String,
        },
        note_title: {
            type: String,
            require: true
        },
    }]
},{timestamps:true})

const noteModel = mongoose.model('note', noteSchema)

module.exports = noteModel