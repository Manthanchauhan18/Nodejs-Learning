const noteModel = require('../models/note')

async function handleGetAllNotes(req , res){
    const androidId = req.query.androidId
    // console.log(androidId)
    const notes = await noteModel.findOne({android_id: androidId})
    // console.log(notes)
    // const notes = await noteModel.find({})
    return res.status(200).json(notes)
}

async function handleCreateNewNote(req, res){
    const androidId = req.query.androidId
    const body = req.body
    const exist = await noteModel.findOne({android_id: androidId})
    if(exist){
        await noteModel.findOneAndUpdate({android_id: androidId},
            {
                $push:{
                    notesBody : {
                        note_title: body.note_title,
                        note_message: body.note_message
                    },
                },
        })
    }else{
        if(!body || !body.note_title) return res.status(400).json({error: "Please fill all the feilds!"});
        await noteModel.create({
            android_id: androidId,
            notesBody: body
        })
    }
    
    return res.status(200).json({message: "Successfuly created Note"})
}

async function handleUpdateNote(req, res){
    const id = req.params.id
    const body = req.body
    const androidId = req.query.androidId
    const exist = await noteModel.findOne({android_id: androidId})
    if(!exist) return res.status(400).json({error: "user not exist"});

    // console.log(androidId)
    let noteIndex = exist.notesBody.findIndex((note) => note._id.toString() === id);
    // console.log(noteIndex)
    if(noteIndex === -1) return res.status(400).json({error: "note not found"});
    // console.log(body.note_message, body.note_title)

    exist.notesBody[noteIndex] = await {...exist.notesBody[noteIndex], note_message: body.note_message, note_title: body.note_title}
    await exist.save();
    // console.log(exist.notesBody[noteIndex])

    return res.status(200).json({message: "Updated Successfuly"})
}

async function handleDeleteNote(req, res){
    const id = req.params.id
    const androidId = req.query.androidId

    const exist = await noteModel.findOne({android_id: androidId})
    if(!exist) return res.status(400).json({error: "user not exist"});

    const noteIndex = exist.notesBody.findIndex((note) => note._id.toString() === id);

    if(noteIndex == -1) return res.status(400).json({error: "note not found"});

    exist.notesBody.splice(noteIndex, 1);
    exist.save()

    return res.status(200).json({message: "Note deleted successfuly"})
}


module.exports = {
    handleCreateNewNote,
    handleGetAllNotes,
    handleUpdateNote,
    handleDeleteNote
}