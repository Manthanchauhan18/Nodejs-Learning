const exp = require('constants')
const { Socket } = require('dgram')
const express  = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const PORT = 9000

//server connection
const app = express()
const serverHttp = http.createServer(app)
const io = new Server(serverHttp)

// socket io request handle
io.on("connection", (socket) => {
    socket.on('user-message', (message) => {
        io.emit('new-message', message)
    })
})


//express http request handle
// middleware for html file
app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    return res.sendFile('/public/index.html')
} )

// port connection
serverHttp.listen(PORT , console.log(`server started at port: localhost:${PORT}`))