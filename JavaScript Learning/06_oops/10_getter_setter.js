// getter and setter methods
// // morden way of using getter and setter
// class User{
//     constructor(username , password){
//         this.username = username
//         this.password = password
//     }

//     // get password(){
//     //     return `***********************`
//     // }
//     // get password(){
//     //     return `${this._password.toUpperCase()}`
//     // }
//     get password(){             // this getter and setter name must be same as variable name
//         return `${this._password.toUpperCase()}jsLearning`
//     }
//     set password(value){        // if you use getter method then must need to write setter method also
//         this._password = value
//     }

//     get username(){             // this getter and setter name must be same as variable name
//         return `${this._username.toLowerCase()} its just example`
//     }
//     set username(value){        // if you use getter method then must need to write setter method also
//         this._username = value
//     }

// }

// const user = new User("Manthan" , "manthan18")
// // console.log(user)   // User { username: 'Manthan', password: 'manthan18' }
// // console.log(user.password)  // ***********************
// // console.log(user.password)  // MANTHAN18
// console.log(user.password)  // MANTHAN18jsLearning
// console.log(user.username)  // manthan18 its just example


// older way of using getter and setter
// // using function getter setter methods
// function User(username , password){
//     this._username = username
//     this._password = password
//     Object.defineProperty(this , 'username' , {
//         get: function(){
//             return `${this._username.toUpperCase()}`
//         },
//         set: function(value){
//             this._username = value
//         }

//     })
//     Object.defineProperty(this , 'password' , {
//         get: function(){
//             return `${this._password.toUpperCase()}temp`
//         },
//         set: function(value){
//             this._password = value
//         }

//     })
// }

// const user = new User("manthan@gmail.com" , "manthan18")
// console.log(user)   // User { _username: 'manthan@gmail.com', _password: 'manthan18' }
// console.log(user.username)  // MANTHAN@GMAIL.COM
// console.log(user.password)  // MANTHAN18temp



// using object getter setter
const User = {
    _email : "manthan@gmail.com",
    _password : "manthan18",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

const user = Object.create(User)
console.log(user.email)     // MANTHAN@GMAIL.COM
console.log(user.password)  // MANTHAN18
