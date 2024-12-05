const userModel = require('../models/user')

async function handleUserLogin(req , res){
    const {email, password} = req.body
    try{
        const userValid = await userModel.matchedPasswordAndLogin(email, password)
        console.log(userValid)
        return res.status(200).json({message: "user login successful"})
    }catch(err){
        return res.status(401).json({error: `${err.message}` })
    }
}

async function handleUserSignup(req , res){
    const body = req.body
    const {email , mobile , name , password} = req.body

    if(!body || !email || !mobile || !name || !password) return res.status(400).json({message: "Please provide all the details!"});

    const userExist = await userModel.findOne({email})
    console.log(userExist)
    if(userExist) return res.status(400).json({Error: "Email already exist"});
    await userModel.create({
        email: email,
        password: password,
        name: name,
        mobile: mobile
    })
    return res.status(200).json({message: "User Created Successfuly"})

}

async function handleGetAllUsers(req, res){
    const users = await userModel.find({})
    return res.status(200).json({users})
}

module.exports = {
    handleUserLogin,
    handleUserSignup,
    handleGetAllUsers
}