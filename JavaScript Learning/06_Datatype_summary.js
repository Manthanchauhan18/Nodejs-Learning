// Datatype summary

/* mainly two types of datatypes are there in JS
    1. primitive ( call by value )
        - string
            - const str = "Manthan"
            - const str = "Chauhan"

        - number
            - const score = 100
            - const score = 1090.53

        - boolean
            - const isLogedin = true
            - const isLogedin = false

        - null
            - let values = null
            - let abc = null

        - undefined
            let student;
            let animal;

        - symbol
            - let id = Symbol('123')
            - let sid = Symbol('123')

        - bigint
            - const bigNumber = 23547356673456456347367354n     // this 'n' required for showing it is bigint anotherwise it will consider as number

    2. non primitive( call by refrance )
        - arrays
            - let array = ["Manthan" , "Dipeshbhai" , "Chauhan"]
            - let array = [1,2,3,4,5,6]

        - objects
            - {
                name: "Manthan",
                age: 23
              }

            - let myObj = {
                name: "Manthan",
                age: 23
              }

        - functions
            - Variable function
                - const varFunction = function(){
                    console.log("Hello World")
                }

*/


// ------------------------------------------symbol example--------------------------------------------
// let id = Symbol('123')
// let sid = Symbol('123') 
// console.table([id , sid])   
// console.log(id === sid);    // false


// ------------------------------------ big int ------------------------------------------------
// const bigNumber = 23547356673456456347367354n
// console.log(typeof bigNumber);



// ---------------------------------- Variable function ---------------------------------------
const varFunction = function(){
    console.log("Hello World")
}                
console.log(typeof varFunction);



