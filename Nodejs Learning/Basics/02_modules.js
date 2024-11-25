// function add(a,b){
//     return a+b
// }    // this function added to 01_hello_world.js for experiment of module 'export' and 'require'
const math = require("./01_hello_world")

// console.log(add(10,5))  // 15   // if the function in current directory which is above
// console.log("Addition result is: ", math(10,5))  // Addition result is:  15
// console.log("Addition result is: ", math(100, 200))  // Addition result is:  300

// have user two function 'add' and 'sub' so this sub value will override the value of add so 
// console.log("Addition result is: ", math(100, 200))  // Addition result is:  -100

// so for avoid this kind of issue use "module.exports = {}" as object and pass the value from inside this object from this '01_hello_world.js'
// console.log("Math value is: ", math.addFn(300,200)) // Math value is: 500
// console.log("Math value is: ", math.subFn(300,200)) // Math value is: 100


// using another way which is export.add = (a,b) => a+b and simillar
console.log(math.add(10,20))    // 30
console.log(math.sub(10,20))    // -10