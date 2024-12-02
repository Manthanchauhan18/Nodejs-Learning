const { setUser } = require('../service/index')
const userModel = require('../models/user')

async function handleUserLogin(req, res){
    const {email, password} = req.body
    const user = await userModel.findOne({email , password})

    if(!user) return res.status(400).json({message: "unauthorised user"});

    // console.log(user)
    const token = setUser(user)
    // console.log(token)
    res.cookie('uid', token)
    return res.status(200).json({token: token})
}

module.exports = {
    handleUserLogin
}