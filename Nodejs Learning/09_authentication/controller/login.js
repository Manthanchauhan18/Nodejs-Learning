const userModel = require('../models/user')
const {v4: uuidv4} = require('uuid')
const {setUser} = require('../service/auth')

async function handleUserLogin(req, res){
    console.log(req.body)
    const {email, password} = req.body
    const user = await userModel.findOne({email, password})
    console.log(user)
    if(!user || !email || !password){
        return res.status(401).json({message: "invalid username or password"})
    }else{
        const sessionId = uuidv4()
        setUser(sessionId, user)
        console.log(sessionId)
        res.cookie('uid', sessionId)
        return res.status(200).json({message: "user login successful"})
    }
}

module.exports = {
    handleUserLogin,
}