const express = require('express')
const connectMongoDb = require('./connection')
const notesRouter = require('./router/note')

const app = express()
const PORT = 8000

// mongoose connection
connectMongoDb('mongodb://127.0.0.1:27017/Notes')
.then(() => {console.log("MongoDb connected!")})
.catch((err) => {console.log(`Error: ${err}`)})

// middleware
app.use(express.json())

// routes
app.use('/note', notesRouter)

//listner
app.listen(PORT , () => {console.log(`your are listening on port localhost:${PORT}`)})