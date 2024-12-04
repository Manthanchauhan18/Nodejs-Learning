const express = require('express')

const app = express()
const PORT = 4000

// router
app.get('/', (req, res) => {
    return res.send(`Cluster learning manageing server on : ${process.pid}`)
})

// listen
app.listen(PORT, () => console.log(`server started on port localhost:${PORT}`))