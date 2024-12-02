const userModel = require('../models/user')

async function handlePostSignup(req, res){
    const {fullName, email, password} =  req.body
    await userModel.create({
        fullName,
        email,
        password
    })
    return res.redirect("/")
}

async function handleGetSignup(req, res){
    return res.render("signup")
}

async function handleGetSignin(req, res){
    return res.render("signin")
}

async function handlePostSignin(req, res){
    const { email, password } = req.body
    try{
        const token = await userModel.matchPasswordAndGenerateToken(email, password)
        // console.log(`token: ${token}`)
        return res.cookie("token", token).redirect('/')
    }catch(error){
        return res.render("signin", {
            error: "Incorrect useremail or password"
        })
    }
}

async function handleUserLogout(req, res){
    return res.clearCookie("token").redirect("/")
}

module.exports = {
    handlePostSignup,
    handleGetSignup,
    handleGetSignin,
    handlePostSignin,
    handleUserLogout
}