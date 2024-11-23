// class introduce after ES-6
// class User{
//     constructor(username , email , password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
    
// }

// const user = new User("Manthan" , "temp@gmail.com", "1234")
// console.log(user)   // User { username: 'Manthan', email: 'temp@gmail.com', password: '1234' }

// simmilar thing done with 
function User(username , email , password){
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc` 
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user = new User("Manthan" , "temp@gmail.com", "1234")
console.log(user)       // User { username: 'Manthan', email: 'temp@gmail.com', password: '1234' }
