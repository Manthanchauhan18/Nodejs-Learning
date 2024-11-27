const express = require('express')
const users = require('./user.json')
const port = 8000

const app = express()

// // 1. for get /api/user return data in json formate and for get /user randor html page
// app.get('/api/user' , (req , res)=>{
//     return res.json(users)      // return data in json formate
// })

// app.get('/user' ,(req , res)=>{
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     res.send(html);     // so there is no need to return because it is randoring html page 
// })

// // 2. for get /api/user/1 where 1 is dynamic id which will get change 
// // so for change in id user (:id) so that it will identify that id will get change
// app.get('/api/user/:id' , (req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user)       // this will return particular user value in json based on the id
// })


// // so browser has by default get request
// // post
// app.post('/api/user',(req , res)=>{
//     return res.json({status: 'pending'})
// })

// //patch
// app.patch('/api/user/:id',(req , res)=>{
//     return res.json({status: 'pending'})
// })

// //delete
// app.delete('/api/user/:id',(req , res)=>{
//     return res.json({status: 'pending'})
// })

// so this url for patch and delete is same as get method for particular user so we can also combine all this things togather
//ex.

// const fs = require('fs')
// app.use(express.urlencoded({extended: false}))  //  now you will get form-urlencoded data from frontend   // without it in req.body you will get nothing 
// app.use(express.json({extended: false}))  // now you will also get json formated data from frontend

// app.route('/api/user/:id')      // having a same url for get, patch and delete so combine all of them at one place
// .get((req , res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user) 
// })
// .patch((req , res)=>{       // update the value of particular object in user.json and api
//     const id = Number(req.params.id)
//     const updateId = users.indexOf(users.find((user)=>(user.id === id)))
//     const updatedData = req.body
//     users[updateId] = {...users[updateId] , ...updatedData}
//     fs.writeFile('./user.json' , JSON.stringify(users) , (req , result) => {
//         return res.json({status: "successful" , id: users[updateId].id})
//     })
// })
// .delete((req , res)=>{          // delete the object from user.json file and also from api
//     const id = Number(req.params.id)
//     const delId = users.indexOf(users.find((user) => user.id === id));
//     if(delId === -1){
//         return res.json({status: "failed" , message: "user not found!"})
//     }else{
//         const idOfDeletion = users.find((user) => user.id === id).id;
//         users.splice(delId,1)
//         fs.writeFile("./user.json" , JSON.stringify(users) , (req , result) => {
//             return res.json({status: 'successful' , id: idOfDeletion})
//         })
//     }   
// })

// app.route('/api/user')  // having same url for get and post so combine both of them at one place
// .get((req,res) => {     // get all users    
//     return res.json(users)
// })
// .post((req,result) => {    // create new user and add into user.json and api
//     const body = req.body;
//     users.push({...body , id:users.length+1})
//     fs.writeFile("./user.json" , JSON.stringify(users) , (err , result)=>{
//         return res.json({status: "successful" , id: users.length})
//     })
// })

// app.listen(port , ()=>{console.log(`you are listening on port: localhost:${port}`)})
 
// ---------------------------------------- middleware concept -----------------------------------------------

const fs = require('fs')
// middleware
app.use(express.urlencoded({extended: false}))  // without it in req.body you will get nothing

// custom middleware
// app.use((req , res , next)=>{
//     console.log("hello from middleware 1")      // so this will hold the middleware, not execute or not call next so this will stuck the output
// })

// app.use((req , res , next)=>{
//     return res.json({status: "Hello from Middleware 1"})   // so this will return directly from here to client it will not forward to express original function
// })

// so the process of middleware like
// client ---> middleware1 ---> middleware2 ---> express function
// so if there is and issue get in middleware 1 then it will return directly to the client otherwise it will forward to next middleware
// so if there is and issue get in middleware 2 then it will return directly to the client otherwise it will forward to next middleware
// and at last perform express its work and return response to client
// so is there any issue occurs on middleware stage then it will not allowed to move forward just return issue to client directly


// for forwarding next in middleware
// app.use((req , res , next)=>{
//     console.log("Hello from middleware 1")
//     req.myPassedUsername = "Manthan Chauhan Extra"      // i would like to pass some extra things in request then use it like 
//     next(); // you also have to validation code here but it just example for a now
// })
// app.use((req , res , next)=>{
//     console.log("Hello from middleware 2 : " , req.myPassedUsername)    // so this myPassedUsername comes from middleware 1 // so you can also pass any extrea data in request
//     next(); // you also have to validation code here but it just example for a now
// })


// app.route('/api/user/:id')      // having a same url for get, patch and delete so combine all of them at one place
// .get((req , res) =>{
//     console.log("From route : " , req.myPassedUsername)     // so this myPassedUsername comes from middleware 1 // so you can also pass any extrea data in request
//     const id = Number(req.params.id);   
//     const user = users.find((user) => user.id === id);
//     return res.json(user) 
// })
// .patch((req , res)=>{       // update the value of particular object in user.json and api
//     const id = Number(req.params.id)
//     const updateId = users.indexOf(users.find((user)=>(user.id === id)))
//     const updatedData = req.body
//     users[updateId] = {...users[updateId] , ...updatedData}
//     fs.writeFile('./user.json' , JSON.stringify(users) , (req , result) => {
//         return res.json({status: "successful" , id: users[updateId].id})
//     })
// })
// .delete((req , res)=>{          // delete the object from user.json file and also from api
//     const id = Number(req.params.id)
//     const delId = users.indexOf(users.find((user) => user.id === id));
//     if(delId === -1){
//         return res.json({status: "failed" , message: "user not found!"})
//     }else{
//         const idOfDeletion = users.find((user) => user.id === id).id;
//         users.splice(delId,1)
//         fs.writeFile("./user.json" , JSON.stringify(users) , (req , result) => {
//             return res.json({status: 'successful' , id: idOfDeletion})
//         })
//     }   
// })

// app.route('/api/user')  // having same url for get and post so combine both of them at one place
// .get((req,res) => {     // get all users    
//     return res.json(users)
// })
// .post((req,result) => {    // create new user and add into user.json and api
//     const body = req.body;
//     users.push({...body , id:users.length+1})
//     fs.writeFile("./user.json" , JSON.stringify(users) , (err , result)=>{
//         return res.json({status: "successful" , id: users.length})
//     })
// })


// adding custom personal header
// app.get('/api/user',(req , res) =>{
//     // you can also add your customised header
//     res.setHeader("X-dev_name", "Manthan Chauhan")    // it is response header
//     console.log(req.headers)    // you can also read the headers which is getting from frontend
//     // good practices in header
// // always add X before the custom header    
    
//     return res.json(users)
// })

// --------------------------- status code ----------------------------------------
app.post('/api/user',(req,res) => {   // so by the post request it will return status code = 200 but need to return status = 201 as per the documentation so for that
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address) res.status(400).json({message: "please provide all values"})
    users.push({...body , id:users.length+1})
    fs.writeFile("./user.json" , JSON.stringify(users) , (err , result)=>{
        return res.status(201).json({status: "successful" , id: users.length})
    })
})

app.listen(port , ()=>{console.log(`you are listening on port: localhost:${port}`)})


