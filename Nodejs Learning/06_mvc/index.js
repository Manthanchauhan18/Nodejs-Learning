const userRouter = require('./routes/user')
const {connectMongoDb} = require('./connection')
const {logResReq} = require('./middlewares/index')
const express = require('express')

const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: false}))  // this is for form-urlencoded body get from fronted
app.use(express.json({extended: false}))    // this is for json body get from frontend

// mongoose connection
connectMongoDb("mongodb://127.0.0.1:27017/mongodb-learning-1")
.then(() => {console.log("MongoDb connected!")})
.catch((err) => {console.log("Error: ",err)})

// middleware
app.use(express.urlencoded({extends: false}))
app.use(logResReq("log.txt"))


// Routes
app.use("/api/user", userRouter)

app.listen(PORT , (err , result) => console.log("You are connected to: localhost:",PORT))