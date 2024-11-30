const userModel = require('../modules/user')

async function handleUserLogin(req , res){
    const {email, password} = req.body
    const userValid = await userModel.findOne({email , password})
    // console.log(email , password , userValid)
    if(!userValid) return res.status(400).json({Error: "Invalid username or password!"});
    
    return res.status(200).json({message: "User login Successful"})
}

async function handleUserSignup(req , res){
    const body = req.body
    const {email , mobile , name , password} = req.body

    if(!body || !email || !mobile || !name || !password) return res.status(400).json({message: "Please provide all the details!"});

    const userExist = await userModel.findOne({email})
    console.log(userExist)
    if(userExist) return res.status(400).json({Error: "Email already exist"});
    const result = await userModel.create({
        email: email,
        password: password,
        name: name,
        mobile: mobile
    })
    console.log(result)
    return res.status(200).json({message: "User Created Successfuly"})

}

module.exports = {
    handleUserLogin,
    handleUserSignup
}