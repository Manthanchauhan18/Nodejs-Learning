const express = require('express')
// const users = require('./user.json')
const mongoose = require('mongoose')
const PORT = 8000


const app = express()
app.use(express.urlencoded({extended: false}))  // this is for form-urlencoded body get from fronted
app.use(express.json({extended: false}))    // this is for json body get from frontend

// mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/mongodb-learning-1")
.then(() => console.log("MongoDb Connected"))
.catch((err) => console.log("Mongo Error: ",err))

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

app.route('/api/user')
.get(async (req , res) => {
    const allDbUsers = await userModel.find({})
    return res.status(200).json(allDbUsers)
})
.post(async(req , res) => {
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address){
        return res.status(400).json({message: "Please provide all fields"})
    }

    const result = await userModel.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        ipaddress: body.ip_address
    })

    console.log(result)
    return res.status(201).json({message: "successful"})


    // console.log(body)
    // return res.json({status: "Created" , id: users.length+1})
})

app.route('/api/user/:id')
.get(async(req, res) => { 
    const result = await userModel.findById(req.params.id)
    return res.status(200).json(result)
})
.patch(async(req, res) => {
    const body = req.body
    await userModel.findByIdAndUpdate(req.params.id, {...body})
    return res.status(200).json({status: "Successful"})
})
.delete(async(req, res) => {
    await userModel.findByIdAndDelete(req.params.id)
    return res.status(200).json({sataus: "Successful"})
})

app.listen(PORT , (err , result) => console.log("You are connected to: localhost:",PORT))