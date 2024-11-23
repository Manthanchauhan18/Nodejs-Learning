// one constant is there which is Math.PI = 3.1415.... so, we can change the value of it or not if not then why and if yes then how?

// console.log(Math.PI)    // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI)    // 3.141592653589793
// // it will not override the value of pi    

// const piValue = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(piValue)
/*
    {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
    }
*/  

// console.log(Math.PI)
// Object.defineProperty(Math , "PI" , {   // runtime Error: Cannot redefine property: PI
//     writable: true
// })
// Math.PI = 5
// console.log(Math.PI) 

// so you can not change the value of pi because it is hardcoded with writable= false you can try your best but you can not change the value of it



// making own hardcoded value like pi 
const car = {
    name: "Swift",
    price: 400000,
    isAvailable: true
}

// console.log(car)    // { name: 'Swift', price: 400000, isAvailable: true }
// console.log(Object.getOwnPropertyDescriptor(car))   // undefined  // because you are applying descriptor on object not on value
// console.log(Object.getOwnPropertyDescriptor(car , 'name'))   
/*
    {
        value: 'Swift',
        writable: true,
        enumerable: true,
        configurable: true
    }
*/
// so you can also change the value of this name because it is writable: true

Object.defineProperty(car , "name",{
        writable: false,    // you can not modify the value after writable: false
        enumerable: false,   // you can not enumerate or iterate over it if enumerable: false
        configurable: true
})
// console.log(Object.getOwnPropertyDescriptor(car , 'name'))
/*
    {
    value: 'Swift',
    writable: false,    
    enumerable: false,  
    configurable: true
    }
// */
// console.log(car)    // { name: 'Swift', price: 400000, isAvailable: true }
// car.name = "Nano"
// console.log(car)    // { name: 'Swift', price: 400000, isAvailable: true }


// for (const [key,value] of Object.entries(car)) {
//     console.log(`${key} : ${value}`)
// }    // you can not enumerate or iterate over it if enumerable: false
/*
    // if value of enumerable = true
    name : Swift
    price : 400000
    isAvailable : true

    // if value of enumerable = false
    price : 400000
    isAvailable : true
*/