// ------------------------------------------ using express + http ------------------------------------------
// const http = require('http')
// const express = require('express')

// const app = express()
// app.get('/' , (req , res)=>{
//     return res.send("Hello From Homepage")
// })
// // app.get('/about-us' , (req , res)=>{
// //     return res.send("Good morning, user")
// // })   // Good morning, user
// app.get('/about-us' , (req , res)=>{
//     return res.send(`Good morning, ${req.query.username}`)
// })  // Good morning, manthan chauhan

// // app.post('/submit' , (req , res)=>{})   // for the post request

// const myServer =  http.createServer(app)

// myServer.listen(8000 , ()=>{console.log("Server Started!")})    
// //so this above code where you manage the cases in switch for the url path here using express just directly use it express will manage the urls itself
// // which makes work easier

// //http://localhost:8000/about-us    // so it will go inside this app.get('/about-us')and perform
// //http://localhost:8000/about-us?status=true    // so it will also go inside this app.get('/about-us')and perform , here express manage query it self which we manage in ago code in '02_http server'


// ---------------- express will also manage this http thing directly------------------------------------------------------
//ex.
const express = require('express')
const app = express()
app.get('/',(req , res)=>{
    return res.send("Hello from homepage")
})
app.get('/about-us',(req , res)=>{
    return res.send(`Good morning, ${req.query.username}`)
})
app.get('/profile',(req , res)=>{
    return res.send(` ${req.query.username}`)
})

app.listen(8000 , ()=>{console.log("You are listening on: localhost:8000")})


// so express is just a framework internaly it is just use http

