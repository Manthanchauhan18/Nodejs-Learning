/*
    -> prmise object represents the eventual comletion of an asynchronous operation and its resulting values
    -> for ex. whenever you are fetching data from api or database or file storage so for this asuchronous programing way used so 
        for that there are two options 
        1. async-await
        2. promise
    -> three states of promise
        1. pending -> initial state, neither fulfilled nor rejected
        2. fullfillled -> meaning that the operation was completed successfully.
        3. rejected -> meaning that the operation failed.
*/

// syntax
const promise = new Promise( function (resolve , reject){

})

// ex. 
// const promiseOne = new Promise( function (resolve , reject){
//     // do an async task
//     // db calls , cryptographi , network
// })

//ex.
// const promiseOne = new Promise( function (resolve , reject){
//     // do an async task
//     // db calls , cryptographi , network
//     setTimeout( function(){
//         console.log("Async task is completed")
//         // resolve()     // this resolve() need to call without it this below 'promiseOne.then()' will not perform 
//     },1000)
// })

// promiseOne.then( function(){
//     console.log("Promise consumed")
// })  
// // Async task is completed

// const promiseOne = new Promise( function (resolve , reject){
//     // do an async task
//     // db calls , cryptographi , network
//     setTimeout( function(){
//         console.log("Async task is completed")
//         resolve()
//     },1000)
// })

// promiseOne.then( function(){
//     console.log("Promise consumed")
// })  
// // Async task is completed
// // Promise consumed

// another direct way of doing this thing
// new Promise( function(resolve , reject){
//     setTimeout( function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("Promise task 2")
// })
// // Async task 2
// // Promise task 2

// another way of using promise
// const promiseThree = new Promise( function(resolve , reject){
//     setTimeout( function(){
//         resolve({username: "Manthan" , age: 23})
//     },1000)
// })

// promiseThree.then( function(user){
//     console.log(user)
// })  // { username: 'Manthan', age: 23 }


// another way of promise
// const promiseFour = new Promise(function(resolve , reject){
//     let error = false       // if error = false then goes for resolve and if error = true then goes for reject
//     if(!error){
//         resolve({username: "Manthan" , age: 23})
//     }else{
//         reject("Error: something want wrong")
//     }
// })

// promiseFour.then( function(user){
//     console.log(user)
//     return user.username        // this value will return to next chaining function 
// })
// .then( function(username){      // this is the chaining of function 
//     console.log(username)
// })
// .catch( function(error){        // rejct connected fuction
//     console.log(error)
// })
// .finally( () => console.log("The promise is either resolved or rejected"))  // this block will always print if it is written in code , no matter for resolve or rejct it will always perform

// /*
//     if error = true
//     Error: something want wrong
//     The promise is either resolved or rejected
// */
// /*
//     if error = false
//     { username: 'Manthan', age: 23 }
//     Manthan
//     The promise is either resolved or rejected
// */


// another way of promise
// const promiseFive = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false       // if error = false then goes for resolve and if error = true then goes for reject
//         if(!error){
//             resolve({username: "Manthan" , age: 23})
//         }else{
//             reject("Error: something want wrong")
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){    // alternative of then() and catch(), async and await used
//     try {
//         const response = await promiseFive      // await wait for the response
//         console.log(response)
//     } catch (error) {   // async await cant be able to handle the error so for that used try and catch block
//         console.log(error)
//     }
// }   // { username: 'Manthan', age: 23 }

// consumePromiseFive()    // you have to call like this also 

// async await with fetch()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)\
//         const data = await response.json()    
//         // only network call dont take too much time but also some functions will take time like this function it is taking time to convert into json so system not print it 
//         // for this resone used await before it , so that thread will wait for the data convert into json
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()

// above thing using promise
fetch('https://jsonplaceholder.typicode.com/users') // this is a also an promise so you can directly use then() and catch() method on it
.then( function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
