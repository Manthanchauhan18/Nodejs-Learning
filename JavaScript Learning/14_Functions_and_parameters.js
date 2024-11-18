// Functions and parameters

// syntax
function function_name(){

}

// ex.
// function addition(){
//     const a = 10
//     const b = 20
//     const c = a+b
//     console.log(c);
// }                       // this is function defination or function body

// addition()  // this is fuction execution or calling the function


// ------------- addition function with parameter ----------------
// function addTwoNumber(num1 , num2){
//     console.log(num1 + num2);
// }

// addTwoNumber(3 , 3)     // 6
// addTwoNumber(3 , "3")     // 33   so this will create a problem because of 3 + "3"
// addTwoNumber(3 , "a")     // 3a   so this will create a problem because of 3 + "a"   we didnt check for the paramenter was number or not


//ex. -----------------
// function addTwoNumber(num1 , num2){
//     // let result = num1 + num2
//     // return result
//     // or 
//     return num1 + num2
// }

// const result = addTwoNumber(3 , 5)
// console.log(result);        // 8


// function loginUser(userName){
//     return (`${userName} just logged in`)
// }

// console.log( loginUser("Manthan") ) // Manthan just logged in 
// console.log( loginUser("") ) // just logged in 
// console.log( loginUser() ) // undefined just logged in 


// function loginUser(username){
//     if(username === undefined){
//         console.log("Please enter valid username");
//         return 
//     }
//     return (`${username} just logged in`)
// }

// console.log(loginUser("Manthan")); // Manthan just logged in
// console.log(loginUser(""));        // just logged in
// console.log(loginUser());          // Please enter valid username


// there is another way of avoiding undefined
function loginUser(username = "User"){      // providing default value so if can't get any value then function take this default value
    return (`${username} just logged in`)
}

console.log(loginUser("Manthan")); // Manthan just logged in
console.log(loginUser(""));        // just logged in
console.log(loginUser());          // User just logged in 
