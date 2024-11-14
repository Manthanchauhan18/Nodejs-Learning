// comparision of datatypes

// console.log(2 > 1);     // true
// console.log(2 >= 1);    // true
// console.log(2 < 1);     // false
// console.log(2 <= 1);    // false
// console.log(2 == 1);    // false
// console.log(2 != 1);    // true



// ---------------------- avoid this below kind of comparision  -------------------------------------

// console.log("2" > 1);    // true
// console.log("02" > 1);    // true       // JS automaticaly convert string to number and then compare it

// console.log(null > 0);  // false    
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined > 0);  // false    
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false



// === this will first check for the datatype if equal then further compare
console.log("2" === 2);     // false
console.log(2 === 2);     // true
console.log(null === 0);     // false
console.log(undefined === 0);     // false
console.log("2" === 0);     // false
