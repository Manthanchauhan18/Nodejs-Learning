/* two way of objects
    1. singleton
        - Object.create

    2. object literals
        - cosnt JsObj = {
            name: "Manthan",
            age: 23,
            city: "Surat",
            email: "temp@gmail.com",
            isLoggedIn: false,
            lastLogin: ["Monday" , "Friday"]
        }
*/

const mySym = Symbol("key1")
const JsObj = {
    name: "Manthan",
    "sur name" : "Chauhan",
    [mySym]: "Mykey1",
    age: 23,
    city: "Surat",
    email: "temp@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday" , "Friday"]
}

// console.log(JsObj.email);       // temp@gmail.com
// console.log(JsObj["email"]);    // temp@gmail.com   // you have to write the key as string because all keys are treated as a string so

// // console.log(JsObj.sur name);       // gives an error because it will not allow to access this key as it declared in double quotes
// console.log(JsObj["sur name"]);    // Chauhan   // you have to write the key as string because all keys are treated as a string so

// console.log(JsObj.mySym);   // MyKey1
// console.log(typeof JsObj.mySym);   // string // if you write key as mySym without [] then object treat it like string ex mySym: "key1"

// console.log(JsObj[mySym]);   // MyKey1
// console.log(typeof JsObj[mySym]);   // string // but this time the key was treated as symbol because we write key as [mySym]: "key1"
                                        // if you print whole object then you will notice that object treated as symbol to this key
                                        // [Symbol(key1)]: 'Mykey1' ->  (whole object printing)


// JsObj.email = "Manthan@gmail.com"
// console.log(JsObj);
//                         /*
//                             {
//                                 name: 'Manthan',
//                                 'sur name': 'Chauhan',
//                                 age: 23,
//                                 city: 'Surat',
//                                 email: 'Manthan@gmail.com',
//                                 isLoggedIn: false,
//                                 lastLogin: [ 'Monday', 'Friday' ],
//                                 [Symbol(key1)]: 'Mykey1'
//                             }
//                         */

// Object.freeze(JsObj)        // after this line you are not be able to modify anything in object there is no effect of changes 

// JsObj.email = "testing@gmail.com"
// console.log(JsObj);      /*
//                             {
//                                 name: 'Manthan',
//                                 'sur name': 'Chauhan',
//                                 age: 23,
//                                 city: 'Surat',
//                                 email: 'Manthan@gmail.com',
//                                 isLoggedIn: false,
//                                 lastLogin: [ 'Monday', 'Friday' ],
//                                 [Symbol(key1)]: 'Mykey1'
//                             }
//                         */



//-------------------- function inside object------------------

// JsObj.greeting = function(){
//     console.log("Hello Js User");   
// }

// console.log(JsObj.greeting);       // Function (anonymous)]     // so without bracket it will give this kind of error
// JsObj.greeting();     // Hello Js User     // printing the log which is writen inside the function  


// JsObj.greetingTwo = function(){
//     console.log(`Hello js user, ${this.name}`);
// }
// JsObj.greetingTwo() // Hello js user, Manthan   // so 'this' keyword refers to the current object using it you are able to access all the properties of current object like this.name , this.email , this.age, etc.



// -------------------------------- singleton object =---------------------------------------------------

const tinderUser = new Object()     // this is singleton object
// const tinderUser = {}   // this is non singleton object

tinderUser.id = "12345"
tinderUser.name = "Manthan"
tinderUser.isLoggedIn = true

// console.log(tinderUser);    // { id: '12345', name: 'Manthan', isLoggedIn: true } 

const regularUser = {
    email: "temp@gmail.com",
    fullname: {
        usersFullname: {
            firstname: "Manthan",
            lastName: "Chauhan"
        }
    }
}

// console.log(regularUser.fullname.usersFullname.firstname);      // Manthan  // you are able to nesting the objects insider one object 



// -------------you can also combine two object togather 

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {4: "e" , 6: "f"}

// // const obj3 = {obj1 , obj2}
// // console.log(obj3);      // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }   // but there is an same problem like array occurs


// syntax -> Object.assign(target , source) 
// const obj4 = Object.assign({}, obj1 , obj2 , obj3)     // {} this bracket to add at first so that all the object are combined and add into this first {}   // if you dont write it then there is no issue but it goods to add {}
// console.log(obj4);      // { '1': 'a', '2': 'b', '3': 'c', '4': 'e', '6': 'f' }

// user of spread to combine the objects like array
const obj4 = {...obj1 , ...obj2 , ...obj3} 
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'e', '6': 'f' }     

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ]   // return in array formate  // arrays of keys 
console.log(Object.values(tinderUser));   // [ '12345', 'Manthan', true ]   // return in array formate  // arrays of keys 
console.log(Object.entries(tinderUser));   // [ [ 'id', '12345' ], [ 'name', 'Manthan' ], [ 'isLoggedIn', true ] ]   // return key value arrays inside array




