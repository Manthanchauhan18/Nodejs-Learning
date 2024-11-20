// Globle scope and local scope in JS


// normal access of variable
// let a = 10
// const b = 20
// var c = 30

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// // variable access from inside the scope
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a); // this will give an error because let variable not accessible out of the scope
// console.log(b); // this will give an error because const variable not accessible out of the scope
// console.log(c); // 30       // but this var variable print the value this is the problem of var in JS for this resone avoid to use var in code


// one more issue with var in JS
// var c = 300
// if(true){
//     var c = 30
// }
// console.log(c); // 30 // so this var will save the value which is lastly saved 

// so if multiple programmers working on same project then this kind of issue will be face


// now similar situation for let 
// let a = 100
// if(true){
//     let a = 10
//     console.log(a);     // 10   // because this time a finds the local scope value so it will get change to 10
// }
// console.log(a);     // 100  // because there is no interaction with the local scope value so it will use globle scope value


// same thing with const 
// const b = 200
// if(true){
//     const b = 20
//     console.log(b);     // 20
// }
// console.log(b);     // 200


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// this i of for loop can not ve accessible out of for loop which is good thing in codeing 
 




