// call holds the refrance after execution of function
// in general when you call any function then it will add into callstack but once the execution comepleted it will remove the function from callstack
// so for this issue used call to hold the refrance even after execution of fuction

// ex.
function SetUsername(username){
    this.username = username
}

// function CreateUser(username , email , password){
//     SetUsername(username)
//     this.email = email
//     this.password = password
// }

// const user = new CreateUser("Manthan" , "temp@gmail.com" , "12345")
// console.log(user)   // CreateUser { email: 'temp@gmail.com', password: '12345' } 
// // so you will not get the username value because havent use call yet

// function CreateUser(username , email , password){
//     SetUsername.call(username)
//     this.email = email
//     this.password = password
// }

// const user = new CreateUser("Manthan" , "temp@gmail.com" , "12345")
// console.log(user) // CreateUser { email: 'temp@gmail.com', password: '12345' }
// // still you dont have username because you also have to hold the value also which is get from function you just hold the refrance of setUsername function not value from it

function CreateUser(username , email , password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const user = new CreateUser("Manthan" , "temp@gmail.com" , "12345")
console.log(user) // CreateUser { username: 'Manthan', email: 'temp@gmail.com', password: '12345' }

