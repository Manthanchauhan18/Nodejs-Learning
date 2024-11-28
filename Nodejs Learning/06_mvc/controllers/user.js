const userModel = require('../models/user')

async function handleGetAllUsers(req, res){
    const allDbUsers = await userModel.find({})
    return res.status(200).json(allDbUsers)
}

async function handleGetUserById(req, res){
    const result = await userModel.findById(req.params.id)
    return res.status(200).json(result)
}

async function handlePatchUserById(req, res){
    const body = req.body
    await userModel.findByIdAndUpdate(req.params.id, {...body})
    return res.status(200).json({status: "Successful"})
}

async function handleDeleteUserById(req, res){
    await userModel.findByIdAndDelete(req.params.id)
    return res.status(200).json({sataus: "Successful"})
}

async function handlePostUser(req, res){
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address){
        return res.status(400).json({message: "Please provide all fields"})
    }

    const result = await userModel.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        ipaddress: body.ip_address
    })

    console.log(result)
    return res.status(201).json({message: "successful"})


    // console.log(body)
    // return res.json({status: "Created" , id: users.length+1})
}


module.exports ={
    handleGetAllUsers,
    handleGetUserById,
    handlePatchUserById,
    handleDeleteUserById,
    handlePostUser
}