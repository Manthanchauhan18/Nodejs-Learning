const userModel = require('../models/user')

async function handleGetAllUsers(req, res){
    const users = await userModel.find({})
    return res.status(200).json(users)
}

async function handleCreateUser(req, res){
    const body = req.body
    const {email} = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.password) return res.status(404).json({message: "please provide all the details"});
    
    const exist = await userModel.findOne({email})
    if(exist) return res.status(400).json({message: "email already exist"});
    const result = await userModel.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        password: body.password,
    })

    // console.log(result)

    return res.status(200).json({message: "successful"})
}

module.exports = {
    handleGetAllUsers,
    handleCreateUser
}