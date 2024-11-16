//Scope levels and mini hoisting in JS

// function one(){
//     const username = "Manthan"
//     function two(){
//         const surname = "Chauhan"
//         console.log(`${username} , inner`)  // Manthan , inner      // you are able to access the outer scope variable from inner scope 
//         console.log(`${surname} , inner`)   // Chauhan , inner
//     }
//     console.log(`${username} , outer`)  // Manthan , outer
//     // console.log(`${surname} , outer`)   // this will give an error because of accesing variable outside of the scope
//     two()
// }

// one()


// ------------------------------------------------------------------------------------------------------
// function addOne(num){
//     return num+1
// }
// console.log(addOne(5))  // 6

// const addTwo = function(num){
//     return num+1
// }
// console.log(addTwo(5))  // 6


// issue when you try to write both console.log line before the function declaration 
console.log(addOne(5))  // 6
function addOne(num){
    return num+1
}

// console.log(addTwo(5))  // 6     // this line will give you an error for 'Cannot access 'addTwo' before initialization' 
const addTwo = function(num){
    return num+1
}

