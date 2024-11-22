// Arrays in JS

// const arr = [0,1,2,3,4,5,"temp" , true]      // in JS you can add multiple datatype values togather in array 
// const myHeros = ["Manthan" , "Chauhan"]
// const arr2 = new Array(1,2,3,4)      // another way of declaring array 

// console.log(arr[3]);    // 3

// // Array methods
// arr.push(10)    // [0,1,2,3,4,5,"temp" , true ,10]  -> will add new value at end of the array
// console.log(arr);

// arr.pop()
// console.log(arr);   // [0,1,2,3,4,5,"temp" , true]  -> will remove value from end of the array

// arr.unshift(100)    
// console.log(arr);      // [100,0,1,2,3,4,5,"temp" , true]  -> add new value at starting of the array

// arr.shift()    
// console.log(arr);      // [100,0,1,2,3,4,5,"temp" , true]  -> add new value at starting of the array


// console.log(arr.includes(10));      // false
// console.log(arr.includes(3));       // true
// console.log(arr.indexOf(100) );     // -1 because 100 is not there in array
// console.log(arr.indexOf(1));        // 1


// const newArr = arr.join()
// console.log(arr);           // [0,1,2,3,4,5,"temp" , true]  
// console.log(newArr);        // 0,1,2,3,4,5,temp,true        // it will print array as string 


// --------------------slice and splice-----------------------------------

// slice
// console.log("A " , arr);    // A [0,1,2,3,4,5,"temp" , true]  
// const myn1 = arr.slice(1,3) 
// console.log(myn1);          // [ 1, 2]
// console.log("B " , arr);    // B [0,1,2,3,4,5,"temp" , true]  

// // splice
// const myn2 = arr.splice(1,3) 
// console.log(myn2);          // [ 1, 2 ,3 ]
// console.log("C " , arr);    // c  [ 0, 4, 5, 'temp', true ]

// /*------------Note -> slice will not include the last index of range ex (1,3) -> 1,2
//                     but splice will include the last index of range ex (1,3) -> 1,2,3
//                     one more diff is in slice original array will not get affected 
//                     but in splice original array will get affected as you shown above
// */


// ----------------------------------------------------------------------------------------------

// const arr = [1,2,3,4]
// const arr2 = [10,20,30,40]
// const arr3 = [100,200,300,400]

// arr.push(arr2)
// console.log(arr);   // [ 1, 2, 3, 4, [ 10, 20, 30, 40 ] ]
// console.log(arr[4][2]);     //30


// console.log(arr.concat(arr2));   // [ 1, 2, 3, 4, 10, 20, 30, 40 ]

/* -------------------- Note:- push will add whole array inside array but in concate add values in array as you seen above*/

// const newArr = [...arr , ...arr2 , ...arr3]  // work similar as concate but it will efficiant whenever there is multiple array need to concate
// console.log(newArr);    // [ 1, 2, 3, 4, 10, 20, 30, 40, 100, 200, 300, 400 ]



// -----------------------------------------------------------------

// const arr4 = [1,2,3,4,[5,6,7],6,7,[8,9,[1,2 , [3,4]]]]
// const newArr2 = arr4.flat(1)    // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9, [ 1, 2, [ 3, 4 ] ] ]    // depth = 1
// console.log(newArr2);
// const newArr3 = arr4.flat(2)    // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9, 1, 2, [ 3, 4 ] ]   // depth = 2
// console.log(newArr3);
// const newArr4 = arr4.flat(Infinity)    // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9, 1, 2, 3, 4 ]    // this depth will remove all sub arrays and make single parent array
// console.log(newArr4);


// console.log(Array.isArray("Manthan"));  // false
// console.log(Array.isArray([1,2,3,4]));  // true
// console.log(Array.isArray(["Manthan" , "Chauhan"]));  // true

// console.log(Array.from("Manthan"));     // ['M', 'a', 'n','t', 'h', 'a','n']    // convert into array
// console.log(Array.from({name: "hitesh"}));      // [] -> it will give empty array because you have to define arrays of keys or arrays of values

// const obj = {
//     name: "Manthan",
//     age: 23,
//     city: "Surat"
// }

// const keysArray = Object.keys(obj)
// const valuesArray = Object.values(obj)
// console.log(keysArray);     // [ 'name', 'age', 'city' ]
// console.log(valuesArray);     // [ 'Manthan', 23, 'Surat' ]

const score1 = 100
const score2 = 200
const score3 = 300

const arr = Array.of(score1 , score2 , score3)
console.log(arr);       // [ 100, 200, 300 ]    // will make new arrays of variables




