// Immediatly invoked fuction expression (IIFE)

// IIFE was used to invoked some functionaly whenever application starts or file starts
// for example there was an file which is having database connection code inside it so this file need to start immediatly so that databse get connected immediatly whenever application starts

// syntax
    // ()()    first () was defination and () execution

// ex.
// ( function iifeFunEx(){
//     console.log("DB CONNECTED")
// })();       // this semicolan must be needed in IIFE because without it JS dont know where to stop the function which is shown below


//IIFE without semicolan issue
// ( function iifeFunEx(){
//     console.log("DB CONNECTED")
// })()

// ( function iifeFunEx2(){
//     console.log("DB CONNECTED")
// })()

/*
    ( function iifeFunEx2(){
    ^

    TypeError: (intermediate value)(...) is not a function
        at Object.<anonymous> (D:\A - Manthan Work\VsCode\JavaScript\JavaScript Learning\19_immediatly_invoked_function_expression.js:17:1)
        at Module._compile (node:internal/modules/cjs/loader:1376:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
        at Module.load (node:internal/modules/cjs/loader:1207:32)
        at Module._load (node:internal/modules/cjs/loader:1023:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
        at node:internal/main/run_main_module:28:49

    Node.js v20.10.0
*/

( function iifeFunEx(){
    console.log("DB CONNECTED")
})();

( function iifeFunEx2(){
    console.log("DB CONNECTED 2")
})();

/*
    DB CONNECTED
    DB CONNECTED 2
*/
// --------------- NOTE :- so this is important thing for interview that semicolan must be needed if you want to use two IIFE functions

// this below was simple IIFE which is made by arrow function
( () => {
    console.log("Simple IIFE or unnamed IIFE");
})();

// this below was named IIFE
( function temp(){
    console.log("Named IIFE")  
})();


