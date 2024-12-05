const mongoose = require('mongoose')
const { createHmac , randomBytes } = require('crypto')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    mobile:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    salt: {
        type: String
    },
    password:{
        type: String,
        require: true
    },
},{timestamps: true})

// this is for singup user password hashing
userSchema.pre("save", function(next) {
    const user = this
    if(!user.isModified("password")) return;
    const salt = randomBytes(16).toString() 
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest('hex')

    this.salt = salt;
    this.password = hashedPassword

    next()

})

// this is for singin user password hashing
userSchema.static("matchedPasswordAndLogin", async function(email, password){
    const user = await this.findOne({email})
    if(!user) throw new Error('Invalid email or password');

    const salt = user.salt
    const hashedPassword = user.password

    const userProvidedSaltHash = createHmac("sha256", salt).update(password).digest('hex')

    if(hashedPassword !== userProvidedSaltHash) throw new Error('Invalid username or password');

    const result = "successful"
    return result;
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel