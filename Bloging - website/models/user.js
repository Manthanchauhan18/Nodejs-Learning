const { Schema, model } = require("mongoose")
const { createHmac, randomBytes } = require('crypto')
const { createTokenForUser } = require("../service/authentication")

const userSchema = new Schema({
    fullName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    salt:{
        type: String,
    },
    password:{
        type: String,
        require: true
    },
    profileImageUrl:{
        type: String,
        default: '/images/default_avatar.png'
    },
    role:{
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
},{timestamps: true})

// this is for singin user password hashing
userSchema.static("matchPasswordAndGenerateToken", async function(email, password){
    const user = await this.findOne({email})

    if(!user) throw new Error('Invalid useremail or password')

    const salt = user.salt
    const hashedPassword = user.password

    const userProvidedHash = createHmac("sha256", salt).update(password).digest("hex")

    if(hashedPassword !== userProvidedHash) throw new Error('Invalid password');
    const token = createTokenForUser(user)
    return token;
})

// this is for signup user password hashing
userSchema.pre("save", function(next){
    const user = this;
    if(!user.isModified("password")) return;
    const salt = randomBytes(16).toString()
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex")

    this.salt = salt
    this.password = hashedPassword

    next()
})

const userModel = model('Users', userSchema)

module.exports = userModel