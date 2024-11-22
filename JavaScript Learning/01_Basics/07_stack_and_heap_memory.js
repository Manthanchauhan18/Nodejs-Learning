// Stack and Heap memory

/* two type of memory are there in JS
    1. stack -> used in all primitive datatype
        - in stack memory you will get a copy of variable not actual variable so if you want to change the value then it will not affect the original value

    2. heap  -> used in all non primitive datatype
        - in heap memory you will get a refrance of the value so if you want to change the value from another variable then it will also change for original variable value
*/


// ---------------------------------------------------- stack memory example ----------------------------------------------------
let youtube = "Manthan"
let second = youtube
console.log(youtube);   // Manthan
console.log(second);    // Manthan
second = "Chauhan"
console.log(youtube)    // Manthan
console.log(second);    // Chauhan

/* as you seen before the value will not get change even after change the value from second variable 
    because of second variable copy the value of the youtube variable so it will not affect the original value of youtube variable 
    ( CALL BY VALUE )
*/

let userOne = {
    name: "Manthan",
    age: 22
}
let userTwo = userOne
console.log(userOne.name);  // Manthan
console.log(userTwo.name);  // Manthan
userTwo.name = "Chauhan"
console.log(userOne.name);  // Chauhan
console.log(userTwo.name);  // Chauhan

/*
    as you can see the value of userOne also get change after change the value from userTwo 
    because userOne and userTwo had a same refrance of the values so if you change the value from another variable ,
    it will get affect on original variable value also
    ( CALL BY REFRANCE )
*/
