// High order array loops

// --------------------------------------- for of loop  ----------------------------------------------------
// for of on array
// let arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num)
// }   // there is no need of increament decrement or condition for limit the array or etc 

/*
    1
    2
    3
    4
    5
*/

// for of on string
// let str = "Manthan"
// for(const ind of str){
//     console.log(ind);
// }
/*
    M
    a
    n
    t
    h
    a
    n
*/

// for of loop on maps
// map contains only unique values , there is no duplicate values inside map

let map = new Map()     // it is object itselft
map.set('IN' , "India")
map.set('USA' , "United states of America")
map.set('FR' , "France")
map.set('IN' , "India")     // this is duplicate value but this value not print in output

// console.log(map);

/*
    Map(3) {
    'IN' => 'India',
    'USA' => 'United states of America',
    'FR' => 'France'
    }
*/


// for (const key of map) {
//     console.log(key)
// }

/*
    [ 'IN', 'India' ]
    [ 'USA', 'United states of America' ]
    [ 'FR', 'France' ]
*/

// for (const [key , value] of map) {      // if you want to take key and values saprates then iterate like this 
//     console.log(key ,':-' , value)
// }
/*
    IN :- India
    USA :- United states of America
    FR :- France
*/
// ---------------- Note :- for of loop not working over the objects ----------------------------------



// ----------------------------------- for in loop ---------------------------------------------------
// for in loop over the object
// let obj = {
//     game1: "NFS",
//     game2: "Spider man"
// }
// for (const key in obj) {
//     console.log(`${key}`)
// }
/*
    game1
    game2
*/


// for (const key in obj) {
//     console.log(`${key} , ${obj[key]}`)
// }
/*
    game1 , NFS
    game2 , Spider man
*/


// for in loop over the array
// let arr = ["Manthan" , "Dipeshbhai" , "Chauhan"]
// for(const val in arr){
//     console.log(val);
// }   // this will print the index of the arrays 
/*
    0
    1
    2
*/

// for (const val in arr) {
//     console.log(arr[val])
// }
/*
    Manthan
    Dipeshbhai
    Chauhan
*/

// -------------Note :- for in loop not work with the 'MAP'



// ------------------------------------- for each loop ---------------------------------------

// for each loop over the array
// for each loop inbuilt in array

let arr = ["Manthan" , "Dipeshbhai" , "Chauhan"]
// arr.forEach( function(item){     // this is normal function
//     console.log(item)
// })
/*
    Manthan
    Dipeshbhai
    Chauhan
*/

// arr.forEach( (item) => {    // this is with arrow function
//     console.log(item);
// })
/*
    Manthan
    Dipeshbhai
    Chauhan
*/

// function printIt(item){
//     console.log(item)
// }
// arr.forEach(printIt)    // you can also pass function 
/*
    Manthan
    Dipeshbhai
    Chauhan
*/

// arr.forEach( (item , index , arrList) => {
//     console.log(item , index , arrList)
// })      // you also get some more access also like :- items , index , whole array list also
/*
    Manthan 0 [ 'Manthan', 'Dipeshbhai', 'Chauhan' ]
    Dipeshbhai 1 [ 'Manthan', 'Dipeshbhai', 'Chauhan' ]
    Chauhan 2 [ 'Manthan', 'Dipeshbhai', 'Chauhan' ]
*/


let arrOfObj = [
    {
        name: "Manthan",
        age: 23
    },
    {
        name: "Dipeshbhai",
        age: 25
    },
    {
        name: "Chauhan",
        age: 27
    },
]

arrOfObj.forEach( (item) => {
    console.log(item)
})  // this will print whole objects
/*
    { name: 'Manthan', age: 23 }
    { name: 'Dipeshbhai', age: 23 }
    { name: 'Chauhan', age: 23 }
*/

arrOfObj.forEach( (item) => {
    console.log(item.name)
})  // this will print only names from the object
/*
    Manthan
    Dipeshbhai
    Chauhan
*/

arrOfObj.forEach( (item) => {
    console.log(item.age)
})  // this will print only ages from the object
/*
    23
    25
    27
*/
