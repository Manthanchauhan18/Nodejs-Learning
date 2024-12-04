const express = require('express')
const fs = require('fs')
const app = express()
const zlib = require('zlib')
const status = require('express-status-monitor')

const PORT = 9000

app.use(status())

app.get('/', (req, res) => {
    const stream = fs.createReadStream('./sample.txt', 'utf-8')
    stream.on('data', (chunk) => res.write(chunk))
    stream.on('end', () => res.end())
})

// fs read sample.txt file ---->  zipper ----> zip into sample.zip
fs.createReadStream('./sample.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('./sample.zip')))


// listener
app.listen(PORT, () => console.log(`server started on PORT: localhost:${PORT}`))