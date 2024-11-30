const jwt = require('jsonwebtoken')
const secretkey = "manthan@18"

function setUser(user){
    // console.log(user)
    return jwt.sign({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email

    }, secretkey)
}

function getUser(token){
    // console.log(token)
    if(!token) return null;
    return jwt.verify(token ,secretkey)
}


module.exports = {
    setUser,
    getUser
}