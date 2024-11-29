const userModel = require('../models/user')

async function handleGetAllUser(req, res) {
    const result = await userModel.find({})
    return res.json(result)
}

async function handleCreateNewUser(req, res){
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.password) return res.status(400).json({message: "please provide all details"})

    await userModel.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: body.password
    })

    return res.status(200).json({message: "user created successfuly"})
        
}

module.exports = {
    handleGetAllUser,
    handleCreateNewUser
}