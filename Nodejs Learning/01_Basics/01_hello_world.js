// console.log("Hello Js") // Hello Js

// console.log(window) // window is not defined    // because it was a browser functionality
// alert("Hello Js") // alert is not defined    // because it was a browser functionality

// npm -> node package manager
// in package.json file you can define your own entry point for project 
// resone of using npm start there are lots of files you will make for your project so you have to run it so just define your own start point and just run it using 'npm "your entrypoint name"'


// function add(a,b){
//     return a+b
// } 
// module.exports = add;

// now if there is an another function also then 
// function add(a,b){
//     return a+b
// } 
// function sub(a,b){
//     return a-b
// } 
// // module.exports = add;
// // module.exports = sub;   // so this sub function will override the add function value so it will return -100

// // so to solve this issue we can use like below
// module.exports = {
//     addFn: add,
//     subFn: sub
// }

// another way of using exports 
exports.add = (a,b) => a+b
exports.sub = (a,b) => a-b