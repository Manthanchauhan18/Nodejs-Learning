// Function with objects and arrays

// function calculateCartPrice(...num1){       // here '...' is called as rest, two meanings of it rest and spread based on then situation it will call
//     return num1     // because of ... num1 will store all the values as array 
// }

// console.log(calculateCartPrice(200 , 300 ,400 , 500));      // [ 200, 300, 400, 500 ]


// ----------------- with object --------------------------
// const user = {
//     name: "Manthan",
//     price: 100
// }

// function handleObj(anyObject){
//     return (`${anyObject.name} , ${anyObject.price}`)
// }

// console.log(handleObj(user));   // Manthan , 100
// this thing will create an issue whennever there is an change in object so you have to handle it with if-else 

// you can also pass the object directly as argument
// console.log(handleObj({
//     name: "Manthan",
//     price: 100
// }));



// function with array --------------------------------------
const arr = [200 , 300 , 400 , 500]
function returnSecondValue(paraArray){
    return paraArray[2]
}
console.log(returnSecondValue(arr));    // 400
// you can also pass array directly inside the argument
console.log(returnSecondValue([1,2,3,4,5,6]))   // 3



