// // object literals
// const obj = {
//     username: "Manthan",
//     age: 20,
//     getUser: function(){
//         console.log('get user detais')
//     }
// }
// console.log(obj)    // { username: 'Manthan', age: 20, getUser: [Function: getUser] }

// this keyword is used to showing the current context of the object  
// ex.
const obj = {
    username: "Manthan",
    age: 20,
    getUser: function(){
        // console.log(`${username}`) // username is not defined    // because js dont know which username you are talking about
        console.log(`${this.username}`) // Manthan // this having an current object refranceb 
    }
}
console.log(obj)    // { username: 'Manthan', age: 20, getUser: [Function: getUser] }
console.log(obj.getUser())

// NEW keyword is used to make new instance of the current object which is saprate from another objects
// ex.
function user(username , age , loginCount){
    this.username = username;   // here 'this' showing the current object variable and after equal which is get in parameters
    this.age = age;
    this.loginCount = loginCount;
    return this // will return the created object
}

// const userOne = user("Manthan" , 23 , 5)
// const userTwo = user("chauhan" , 23 , 5)
// console.log(userOne)
/*
    username: 'chauhan',
    age: 23,
    loginCount: 5
*/
// so without using 'new' keyword second object value get override the first object value which will create and issue 

const userOne = new user("Manthan" , 23 , 5)
const userTwo = new user("chauhan" , 23 , 5)
console.log(userOne)
console.log(userTwo)
// so using this new both objects are having saprate objects
/*
    user { username: 'Manthan', age: 23, loginCount: 5 }
    user { username: 'chauhan', age: 23, loginCount: 5 }
*/

console.log(userOne.constructor);   // [Function: user]     // so constucter is a refrance of itself thats why it returns [Function: user]