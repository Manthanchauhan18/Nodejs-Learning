const express = require('express')
const {connectionWithDb} = require("./connection")
const userRouter = require("./routes/user")
const loginRouter = require("./routes/login")
const cookieParser = require('cookie-parser')
const {restrictToLoggedInUserOnly} = require('./middlewares/auth')

const app = express()
const PORT = 8000

// mongoose connection
connectionWithDb("mongodb://127.0.0.1:27017/temp")
.then(() => {console.log("MongoDb Connected!")})
.catch((err) => {console.log("Error: ",err)})

// middleware
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/user', restrictToLoggedInUserOnly , userRouter)
app.use('/login', loginRouter)

// port listen
app.listen(PORT , console.log("You are listening on port localhost:",PORT))
