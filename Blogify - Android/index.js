const conntectMongoDb = require('./connection')
const express = require('express')
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')

const app = express()
const PORT = 8000

// mongodb connection
conntectMongoDb("mongodb://127.0.0.1:27017/blogify-Android")
.then(() => {console.log("Mongodb connected!")})
.catch((err) => {console.log(`Error: ${err}`)})

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/user', userRouter)
app.use('/blog', blogRouter)

app.listen(PORT , () => console.log(`you are listening on port: localhost:${PORT}`))