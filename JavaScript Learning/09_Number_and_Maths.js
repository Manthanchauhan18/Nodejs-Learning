// Number and Maths
//two ways of creating number
// const score = 100
// const other = new Number(500)

// console.log(score);
// console.log(other);

// console.log(score.toString());    // 100 -> convert into string
// console.log(score.toString().length);   // 3 after convertion to string we can able to use string methods also

// console.log(score.toFixed(2));  // 100.00 givers number in decimal and specific number of digits we are able to give

// const value = 123.8998
// console.log(value.toPrecision(4));  // 123.9
// console.log(value.toPrecision(3));  // 123.9
// console.log(value.toPrecision(2));  // 123.9


// const num = 10000000
// console.log(num.toLocaleString('en-In'));  //1,00,00,000    // indian standerd way of writing big values



// ------------------------------------------------ Maths ------------------------------------------------------
// console.log(Math);  // it is also object itself     // if you will run this line in browser console then you will find the methods of maths
// console.log(Math.abs(-10));     // 10  -> convert negetive value into positive value

// console.log(Math.round(4.6));   // 5    roundfigure value
// console.log(Math.round(4.3));   // 4    roundfigure value
// console.log(Math.ceil(4.6));    // 5    roundfigure value of upper side
// console.log(Math.ceil(4.3));    // 5    roundfigure value of upper side
// console.log(Math.floor(4.6));    // 4    roundfigure value of lower side
// console.log(Math.floor(4.3));    // 4    roundfigure value of lower side

// console.log(Math.sqrt(3));  // 1.73220
// console.log(Math.pow(3,2));  // 9

// console.log(Math.random()); // return random value in between 0-1 with decimal
// console.log(Math.random() * 10); // return random value in between 0-10 with decimal
// console.log((Math.random() * 10) + 1); // return random value in between 1-10 with decimal 
// console.log(Math.round((Math.random() * 10) + 1)); // return random value in between 1-10 roundfigure value

// random values inbetween some range specific range
const min = 100
const max = 200
console.log(Math.round(Math.random() * (max - min + 1) + min));     // this is logical way of get the random values in between some spacific range




