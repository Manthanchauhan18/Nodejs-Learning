const express = require('express')
const PORT = 8000

const connectMongoDb = require('./connection')
const userRouter = require('./router/user')

const app = express()

// mongodb connection
connectMongoDb("mongodb://127.0.0.1:27017/ShopEase-Android")
.then(() => {console.log("Mongodb connected!")})
.catch((err) => {console.log("Mongodb connection error: ",err)})

// middleware
app.use(express.json())

//router
app.use('/user', userRouter)

// express listen
app.listen(PORT , () => {console.log(`you are listening on port localhost:${PORT}`)})