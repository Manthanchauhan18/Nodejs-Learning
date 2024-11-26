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

const fs = require('fs')
app.use(express.urlencoded({extended: false}))  // without it in req.body you will get nothing
app.route('/api/user/:id')      // having a same url for get, patch and delete so combine all of them at one place
.get((req , res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user) 
})
.patch((req , res)=>{       // update the value of particular object in user.json and api
    const id = Number(req.params.id)
    const updateId = users.indexOf(users.find((user)=>(user.id === id)))
    const updatedData = req.body
    users[updateId] = {...users[updateId] , ...updatedData}
    fs.writeFile('./user.json' , JSON.stringify(users) , (req , result) => {
        return res.json({status: "successful" , id: users[updateId].id})
    })
})
.delete((req , res)=>{          // delete the object from user.json file and also from api
    const id = Number(req.params.id)
    const delId = users.indexOf(users.find((user) => user.id === id));
    if(delId === -1){
        return res.json({status: "failed" , message: "user not found!"})
    }else{
        const idOfDeletion = users.find((user) => user.id === id).id;
        users.splice(delId,1)
        fs.writeFile("./user.json" , JSON.stringify(users) , (req , result) => {
            return res.json({status: 'successful' , id: idOfDeletion})
        })
    }   
})

app.route('/api/user')  // having same url for get and post so combine both of them at one place
.get((req,res) => {     // get all users    
    return res.json(users)
})
.post((req,res) => {    // create new user and add into user.json and api
    const body = req.body;
    users.push({...body , id:users.length+1})
    fs.writeFile("./user.json" , JSON.stringify(users) , (err , result)=>{
        return res.json({status: "successful" , id: users.length})
    })
})

app.listen(port , ()=>{console.log(`you are listening on port: localhost:${port}`)})


