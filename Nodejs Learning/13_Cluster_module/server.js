const cluster = require('node:cluster')
const express = require('express')

const os = require('os')

const totalCpu = os.cpus().length
// console.log(totalCpu)   // 8 becuase my laptop was of 8 core 

if(cluster.isPrimary){
    for (let i = 0; i < totalCpu; i++) {
        cluster.fork();
    }
}else{
    const app = express()
    const PORT = 4000
    
    // router
    app.get('/', (req, res) => {
        return res.send(`Cluster learning manageing server on : ${process.pid}`)
    })

    // listen
    app.listen(PORT, () => console.log(`server started on port localhost:${PORT}`))
}

// so this will return like below output of 8 diffrent small servers
/*
    server started on port localhost:4000
    server started on port localhost:4000
    server started on port localhost:4000
    server started on port localhost:4000
    server started on port localhost:4000
    server started on port localhost:4000
    server started on port localhost:4000
    server started on port localhost:4000
*/

// cluster :-  will used whenever there are lots of traffic on your server so it will devide into small servers who can manage the users for main server