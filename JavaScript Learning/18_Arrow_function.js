// Arrow functions

// const user = {
//     name: "Manthan",
//     price: 100,
//     welcomeMess: function(){
//         console.log(`${this.name}, welcome`);
//         // console.log(this)
//         /*
//             Manthan, welcome
//             { name: 'Manthan', price: 100, welcomeMess: [Function: welcomeMess] }
//             chauhan, welcome
//             { name: 'chauhan', price: 100, welcomeMess: [Function: welcomeMess] }
//         */
//     }
// }

// user.welcomeMess()  // Manthan, welcome
// user.name = "chauhan"
// user.welcomeMess()  // chauhan, welcome

// console.log(this);      // {}       // because we are running this code inside vscode so there is no globle parent is there 
//                                     // but if we run it in browser then we will get output of browser things because globle parent of browser is there

// function temp(){
//     console.log(this)
// }
// temp()      
            /*
                <ref *1> Object [global] {
                global: [Circular *1],
                clearImmediate: [Function: clearImmediate],
                setImmediate: [Function: setImmediate] {
                    [Symbol(nodejs.util.promisify.custom)]: [Getter]
                },
                clearInterval: [Function: clearInterval],
                clearTimeout: [Function: clearTimeout],
                setInterval: [Function: setInterval],
                setTimeout: [Function: setTimeout] {
                    [Symbol(nodejs.util.promisify.custom)]: [Getter]
                },
                queueMicrotask: [Function: queueMicrotask],
                structuredClone: [Getter/Setter],
                atob: [Getter/Setter],
                btoa: [Getter/Setter],
                performance: [Getter/Setter],
                fetch: [Function: fetch],
                crypto: [Getter]
                }
            */

// this kind of output you will get if user this inside function 

// function temp(){
//     const name = "Manthan"
//     console.log(this.name)  // undefined    // because this can't work with function variables as shown , this keyword only works in objects 
// }
// temp()


// arrow function 
// const arrowFun = () => {
//     console.log("this is arrow function");  // this is arrow function
// }
// arrowFun()

// basic arrow function 
// const addTwo = (num1 , num2) => {
//     return num1+num2
// }
// console.log(addTwo(3, 5));

// implicit arrow function 
// const addTwo = (num1 , num2) => (num1 + num2)   // there is no need to write return or {} for implicit arrow function but must be in single line // here if you dont use rounded parantheses then no issue 
// console.log(addTwo(3,5));  // 8 


// implicit return of object in function 
// const addTwo = () => {name: "Manthan"}
// console.log(addTwo());  // undefined // because there is must user of rounded parantheses whenever returning the object 

const addTwo = () => ({name: "Manthan"})
console.log(addTwo());  // { name: 'Manthan' }

