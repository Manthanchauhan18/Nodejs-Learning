// datatype and conversion

// let score = 33

// console.log(typeof score);
// console.log(typeof(score));     // another way of use of typeof keyword     // it will print number number

// -------------------------------------------------------------------

// let score = "33"

// console.log(typeof score);
// console.log(typeof(score));     // it will print string string

// let score2 = Number(score)

// console.log(typeof score2);     // it will print number

//----------------------------------------------------------------------------

// let score = "33abc"
// let score2 = Number(score)
// console.log(typeof score2)      // it will convert string into number but
// console.log(score2)             // it will store as Nan( not a number )

//----------------------------------------------------------------------------

// let score = null
// let score2 = Number(score)
// console.log(typeof score2)      // it will convert null into number but
// console.log(score2)             // it will store as 0

//----------------------------------------------------------------------------

// let score = undefined
// let score2 = Number(score)
// console.log(typeof score2)      // it will convert undefined into number but
// console.log(score2)             // it will store as Nan( not a number )

//----------------------------------------------------------------------------

// let score = true
// let score2 = Number(score)
// console.log(typeof score2)      // it will convert boolean into number but
// console.log(score2)             // it will store as 1 if false then 0

//----------------------------------------------------------------------------

// let score = "Manthan"
// let score2 = Number(score)
// console.log(typeof score2)      // it will convert string into number but
// console.log(score2)             // it will store as Nan( not a number )

//----------------------------------------------------------------------------

// let score = 1
// let score2 = Boolean(score)
// console.log(typeof score2)      // it will convert number into boolean but
// console.log(score2)             // it will store as true because of 1

//----------------------------------------------------------------------------

// let score = ""
// let score2 = Boolean(score)
// console.log(typeof score2)      // it will convert string into boolean but
// console.log(score2)             // it will store as false

//----------------------------------------------------------------------------

// let score = "Manthan"
// let score2 = Boolean(score)
// console.log(typeof score2)      // it will convert string into boolean but
// console.log(score2)             // it will store as true

//----------------------------------------------------------------------------

// let score = 1
// let score2 = String(score)
// console.log(typeof score2)      // it will convert number into string but
// console.log(score2)             // it will store as "1"

//----------------------------------------------------------------------------

// let score = true
// let score2 = String(score)
// console.log(typeof score2)      // it will convert boolean into string but
// console.log(score2)             // it will store as true because of "true"




//   -------------------------------------------- operations --------------------------------------------

let value = 3
let negValue = -value
// console.log(negValue)    // -3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let n1 = "Manthan"
let n2 = " Chauhan"
// console.log(n1+n2)   // Manthan Chauhan

// console.log(1 + "2")    // 12
// console.log("1" + 2)    // 12
// console.log("1" + 2 + 2)    //122
// console.log(1 + 2 + "2")    //122

// console.log( 2 + 2 * 10 / 3 )   // dont write the code like this 
// console.log( (2 + 2) * 10 / 3 )   // try to use parantheses for better understanding

// console.log( true )   // true
// console.log( +true )   // 1     consider as true boolean value because of true
// console.log( true+ )   // it will show error on screen directly

// console.log(+"")    // 0    consider as false boolean value because of empty string



let num1 , num2 , num3
num1 = num2 = num3 = 2+2
console.table([num1 , num2 , num3])     // it will print 4 for all variables

let counter = 100
console.log(counter);   // 100
counter++   // postfix
console.log(counter);   // 101
++counter   // prefix
console.log(counter);   // 102


