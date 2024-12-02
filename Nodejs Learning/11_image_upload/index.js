const express = require('express')
const path = require('path')
const loginRouter = require('./routes/login')


const app = express()
const PORT = 8000

app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

// middlewares
app.use(express.urlencoded({extended: true}))

//routes
app.use('/', loginRouter)

// listening
app.listen(PORT, () => {console.log(`your are listening on port localhost:${PORT}`)})