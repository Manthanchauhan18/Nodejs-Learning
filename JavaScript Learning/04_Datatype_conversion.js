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
// console.log(score2)             // it will store as true because of 1

//----------------------------------------------------------------------------

let score = true
let score2 = String(score)
console.log(typeof score2)      // it will convert boolean into string but
console.log(score2)             // it will store as true because of 1
