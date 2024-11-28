const mongoose = require('mongoose')

// schema of mongoose
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true   // if you dont write require then it will consider as false
    },
    email: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String
    },
    ipaddress: {
        type: String
    }
}, { timestamps: true}) // this time stamp add createdAt and updatedAt variable in object inside database 
/*
    createdAt: ISODate('2024-11-28T09:15:24.854Z'),
    updatedAt: ISODate('2024-11-28T09:15:24.854Z'),
*/

const userModel = mongoose.model("users", userSchema)

module.exports = userModel
