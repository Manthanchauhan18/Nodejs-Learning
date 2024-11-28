const express = require('express')
const urlRoute = require('./routes/url')
const {connectToMongoDB} = require('./connection')

const app = express()
const PORT = 8001

// mongodb connection
connectToMongoDB("mongodb://127.0.0.1:27017/url-shortner")
.then(() => {console.log("connected to MongoDB")})
.catch((err) => {console.log("Error: ",err)})

//middleware
app.use(express.json())

//routes
app.use('/url', urlRoute)

app.listen(PORT , () => {console.log("Server Started on port localhost:",PORT)})