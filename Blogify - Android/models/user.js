const {Schema , model} = require('mongoose')
const { randomBytes, createHmac } = require('crypto')

const userSchema = new Schema({
    fullname : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    salt : {
        type: String,
    },
    password : {
        type: String,
        require: true
    },
},{timestamps: true})

userSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified("password")) return;
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest('hex')
    this.salt = salt
    this.password = hashedPassword

    next()

})

userSchema.static("matchedPasswordHashed", async function(email, password){
    const user = await this.findOne({email})
    if(!user) throw new Error('Invalid username and password');

    const salt = user.salt
    const hashedPassword = user.password

    const userProvidedHash = createHmac("sha256", salt).update(password).digest('hex')
    if(hashedPassword !== userProvidedHash) throw new Error('Invalid password')
})

const userModel = model('User', userSchema)

module.exports = userModel