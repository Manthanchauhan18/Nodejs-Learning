const noteModule = require('../module/note')

async function handleGetAllNotes(req , res){
    const notes = await noteModule.find({})
    return res.status(200).json(notes)
}

async function handleCreateNewNote(req, res){
    const body = req.body
    console.log(body)
    if(!body || !body.note_title) return res.status(400).json({error: "Please fill all the feilds!"});
    const result = await noteModule.create({
        note_message: body.note_message,
        note_title: body.note_title
    })
    return res.status(200).json({message: "Successfuly created Note"})
}

async function handleUpdateNote(req, res){
    const body = req.body
    const id = req.params.id
    if(!Object.keys(body).length > 0) return res.status(400).json({error: "There is no changes have done"});
    await noteModule.findByIdAndUpdate(id,{...body})
    return res.status(200).json({message: "Updated Successfuly"})
}

module.exports = {
    handleCreateNewNote,
    handleGetAllNotes,
    handleUpdateNote
}