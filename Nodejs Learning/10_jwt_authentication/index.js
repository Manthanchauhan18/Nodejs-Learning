const express = require('express')
const userRouter = require('./router/user')
const loginRouter = require('./router/login')
const connectMongoDb = require('./connection')

const app = express()
const PORT = 8000


//mongodb connection
connectMongoDb("mongodb://127.0.0.1:27017/temp")
.then(()=>{console.log("Mongodb Connected")})
.catch((err)=>{console.log("Error: ",err)})

//middleware
app.use(express.json())

// route
app.use("/user", userRouter)
app.use('/login', loginRouter)

// port listen
app.listen(PORT, () => {console.log(`you are live on port localhost:${PORT}`)})