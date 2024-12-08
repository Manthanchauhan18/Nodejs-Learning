const userModel = require('../models/user')

async function handlePostUserLogin(req , res) {
    const {email, password} = req.body
    try{
        await userModel.matchedPasswordHashed(email, password)
        return res.status(200).json({message: "user login successful"})
    }catch(err){
        return res.json({error: err.message})
    }
}

async function handlePostUserRegistration(req , res){
    const { fullname, email, password } = req.body
    const isEmailExist = await userModel.findOne({email})
    if(isEmailExist) return res.status(400).json({error: "email already registered"})
    try {
        await userModel.create({
            fullname,
            email,
            password
        })
        return res.status(200).json({message: "successfuly created"})
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
    
}

async function handleGetUsers(req, res){
    const users = await userModel.find({})
    return res.status(200).json(users)
}

module.exports = {
    handlePostUserLogin,
    handlePostUserRegistration,
    handleGetUsers
}