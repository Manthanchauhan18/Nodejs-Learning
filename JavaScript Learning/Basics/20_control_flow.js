// Control Flow in JS

/* two types of control flow
    1. if-else-elseif
    2.switch
*/

// ------------------------------------ if-else-elseif ---------------------------------------------
// syntax 
/*  if(condition){   // condition - some condition based on that further code will get execute
        // some code will perform if the condition was get satisfied
    }else{
        // some code will perform if the condition was not get satisfied
    }
*/
// ex.
// if(3>2){
//     console.log("3 was grater than 2");
// }else{
//     console.log("3 was not grater than 2");
// }   // 3 was grater than 2

// comparisoinal operaters :- ( > , < , <= , >= , == , != , === )


// const temprature = 41

// if(temprature >= 50){
//     console.log("temprature is more than 50");
// }else if(temprature < 50 && temprature >= 40){      // this else-if need one more condition for check . so, if you have number of conditions to check then it will be used
//     console.log("temprature is less than 50 and graterthan 40")
// }else{
//     console.log("temprature is lessthan 30");
// }   // temprature is less than 50 and graterthan 40

// here there is an use of '&&' which is conditional operator
// there are two types of conditional operators
    // 1. && (AND)  ->  whenever there is all conditions need to satisfy out of given conditions then use of 'and' operator
    // 2. !! (OR)   ->  whenever there is only one conditions need to satisty out of given conditions then use of 'or' operator

// so the logic in '&&' is if there are two conditions then if both conditions are true then only true otherwise false
// same for '!!' is if both conditions are false then only false otherwise true


// let loggedInFromGoogle = true
// let hasDebitcard = false
// let loggedInFromEmail = true

// if(loggedInFromGoogle && loggedInFromEmail){
//     console.log("satisfy");
// }else{
//     console.log("not satisfy"); 
// }   // satisfy

// if(loggedInFromGoogle && hasDebitcard){
//     console.log("satisfy");
// }else{  
//     console.log("not satisfy");
// }   // not satisfy

// if(loggedInFromGoogle || hasDebitcard){
//     console.log("satisfy");
// }else{
//     console.log("not satisfy")
// }   // satisfy



// ------------------------------------- switch ----------------------------------------------

// syntax
/*  switch (key) {
        case value:
            
            break;

        default:
            break;
    }
*/

// let month = 3
// switch (month) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("May")
//         break;

//     default:
//         console.log("Please select valid month")
//         break;
// }   // March

// break -> terminate the entire loop or condition
// continue -> skip the current iterarion of loop

// so the reson of using 'break' in switch cases if any case was satisfy 
// then break the current searching in switch so that it will not check further for another cases
// if we dont write 'break' and then any case match then it will perform all the cases with the current satisfied case so this will create an issue

 // ------------------------------------------ truthy & falsy -------------------------------------
// falsy values -> false, 0, -0, "", NaN , null, undefined, BigInt 0n
// otherthan this values all are truthy values
// some diffrent truthhy values -> "0" , 'false' , " " , [] , {} , function(){}

// way of checking array was empty or not 
// const arr = []
// if(arr.length === 0){
//     console.log("empty")
// }else{
//     console.log("not empty")
// }

// // way of checking object was empty or not 
// const obj = {}
// if(Object.keys(obj).length === 0){
//     console.log("empty")
// }else{
//     console.log("not empty")
// }



//------------------- nullish coalescing operatore(??) --------------------------
// nullish coalescing operatore used whenever factcing data from firebase or from any other way and there is a chance for the value
// will get null or undefined then to manage this thing we define some default value to override this thing

// let val1 = 5 ?? 10
// console.log(val1);  // 5

// let val2 = null ?? 10
// console.log(val2)   // 10

// let val3 = undefined ?? 15
// console.log(val3)   // 15

// let val4 = null ?? 10 ?? 15
// console.log(val4)   // 10

// let val5 = null ?? null ?? 15
// console.log(val5)   // 15



// ------------------------ ternory operator ------------------------------------------
3>2 ? console.log("3 is graterthan 2") : console.log("3 is not graterthan 2")   // 3 is graterthan 2

let temprature = 45
temprature > 50 ? console.log("temprature is graterthan 50") : console.log("temprature is not graterthan 50")   // temprature is not graterthan 50
