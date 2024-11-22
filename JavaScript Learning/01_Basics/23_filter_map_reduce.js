// Filter, Map and Reduce

// ----------------------------------------------- filter ---------------------------------------------------------------------
// Filter :- filter is used to filter some values from array based on some conditions
// const arr = [1,2,4,3,6,7,3,56,7,8,4,5,7,9,9]
// const newArr = arr.filter( (num) => (num > 4))
// console.log(newArr)     // [6, 7, 56, 7, 8, 5, 7,  9, 9]

// const newArr2 = arr.filter( (num) => {
//     return num>4    // you must have to write 'return' keyword whenever you use scope without it you will get empty array '[]'
// })
// console.log(newArr2)    // [6, 7, 56, 7, 8, 5, 7,  9, 9]

// also able to do this above thing with forEach loop
// const newArr3 = []
// arr.forEach( (num) => {
//     if(num > 4){
//         newArr3.push(num);
//     }
// })
// console.log(newArr3)    // [6, 7, 56, 7, 8, 5, 7,  9, 9]


//  new example for filter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const newArr = books.filter( (bk) => {
//     return bk.genre === 'History'
// })
// console.log(newArr)
/*
    [
        {
            title: 'Book Three',
            genre: 'History',
            publish: 1999,
            edition: 2007
        },
        {
            title: 'Book Seven',
            genre: 'History',
            publish: 1986,
            edition: 1996
        }
    ]
*/


// const newArr2 = books.filter( (bk) => {
//     return bk.publish > 2000
// })
// console.log(newArr2)
/*

    [
        {
            title: 'Book Five',
            genre: 'Science',
            publish: 2009,
            edition: 2014
        },
        {
            title: 'Book Eight',
            genre: 'Science',
            publish: 2011,
            edition: 2016
        }
    ]
*/


// ---------------------------------------- map --------------------------------------------------------------------
// const arr = [1,2,3,4,5,6,7,8]
// const newArr = arr.map( (num) => num+10 )
// console.log(newArr);    // [11, 12, 13, 14,15, 16, 17, 18]

// you are able to use multipletimes filter, map and reduce 
// const newArr2 = arr.map( (num) => num*10).map( (num) => num+1).filter( (num) => num>40)
// console.log(newArr2)    // [ 41, 51, 61, 71, 81 ]

// map not work like filter filter will able to get only those values based on the condition but map will iterate over all the elements 


// -------------------------------------------------------- reduce ----------------------------------------------
// const arr = [1,2,3,4]
// const newArr = arr.reduce( function(acc , curVal){
//     console.log(`acc val: ${acc} , curVal: ${curVal}`)
//     /*
//         acc val: 0 , curVal: 1
//         acc val: 1 , curVal: 2
//         acc val: 3 , curVal: 3
//         acc val: 6 , curVal: 4
//     */
//     return acc + curVal
// } , 0)  // this 0 is starting point of the accumulator(acc)
// console.log(newArr);    // 10

// const newArr = arr.reduce( function(acc , curVal){
//     console.log(`acc val: ${acc} , curVal: ${curVal}`)
//     /*
//         acc val: 3 , curVal: 1 
//         acc val: 4 , curVal: 2
//         acc val: 6 , curVal: 3
//         acc val: 9 , curVal: 4
//     */
//     return acc + curVal
// } , 3)  // this 0 is starting point of the accumulator(acc)
// console.log(newArr);    // 13 

// const newArr = arr.reduce( (acc, curVal) => (acc+curVal) , 0)   // using arrow function
// console.log(newArr);    // 10

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const newArr = shoppingCart.reduce( (acc , currVal) => (acc + currVal.price) , 0)
console.log(newArr);    // 22996




