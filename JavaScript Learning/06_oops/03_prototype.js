const myHero = ["thor" , "spiderman"]

const heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpider: function(){
        console.log(`spiderman power is ${this.spiderman}`)
    }
}

// custom prototype inject in object
// heroPower.manthan();  for that need to use Object

Object.prototype.manthan = function(){
    console.log(`manthan is present in all objects`)
}
// heroPower.manthan()     // manthan is present in all objects

// this manthan function also work with array
// myHero.manthan()    // manthan is present in all objects

//  in above cases you just directly access the top level of hirarchy and inject it on object 
// so this object is directly or indirectly you are having with all kind of thing in js 
// so all kind of things like array, string , function , etc can have this fuction access of use

// let check for the giving the power only to the array
Array.prototype.heyManthan = function(){
    console.log("Manthan has power")
}
// myHero.heyManthan()        // Manthan has power
// heroPower.heyManthan()  // heroPower.heyManthan is not a function

// so if you created array level function then only available to access from arrays not by function
// conclution :- if you have created function at lower level then any other lower level can not access it , it is limited to that lower level only ,but if you have created at higher level than every lower level can access it


/*

    lower levels            top level
    array------------------> object -------------------> null
    string-----------------> object -------------------> null
    function---------------> object -------------------> null
    etc.-------------------> object -------------------> null
    // so every lower level has object as a parent but object dont have any parent
    // so if you make function at top level then lower levels are access it 
    // but if you make function at any particular lower level then only that lower level can access it 
*/

// --------------------------------------- inheritance ---------------------------------------

// access the other object property from current object

// // ex.
// // this is olddated way of inheritance
// const User = {
//     name: "Manthan",
//     age: 23
// }

// const Teacher = {
//     makeVideo: true,
//     __proto__: User     // using '__proto__' you can access all the property of particular object directly
// }

// const TeachingSupport = {
//     isAvailable: true
// }

// // TeachingSupport.__proto__ = User    // you can also define it out of the object

// // this is new way of inheritance
// Object.setPrototypeOf(TeachingSupport, Teacher) // 'TeachingSupport' will access all the properties of 'Teacher'



// now one task
let str = "Manthan    "
// console.log(str.length)     // 11
// but what is the true length of str is
// console.log(str.trim().length)  // 7     // so this is the true length of string 
// i want to find this true length with function 

String.prototype.trueLength = function(){
    console.log(`${this}`)  
    console.log(`true length is ${this.trim().length}`)
}
str.trueLength()    // Manthan  // so 'this' will print the current context value
                    // true length is 7

"chauhan    ".trueLength()  // chauhan  // 'this' print the current context value
                            // true length is 7


