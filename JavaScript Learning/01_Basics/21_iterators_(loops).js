// Iteraters (loops)
//  1. for loop
//  2. while loop
//  3. do while loop

// ---------------------------- for loop ------------------------------------

// ex. printing 1-10 numbers 
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
/*
    1
    2
    3
    4
    5
    6
    7
    8
    9
*/

// nested for loop
// for (let i = 0; i < 3; i++) {
//     console.log(`${i} , outerloop`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`${j} , inner loop`);
//     }
// }
/*
    0 , outerloop
    0 , inner loop
    1 , inner loop
    2 , inner loop
    1 , outerloop
    0 , inner loop
    1 , inner loop
    2 , inner loop
    2 , outerloop
    0 , inner loop
    1 , inner loop
    2 , inner loop

*/

// multiplication table using for loop
// for (let i = 1; i < 3; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
//     console.log();
// }
/*
    1 * 1 = 1
    1 * 2 = 2
    1 * 3 = 3
    1 * 4 = 4
    1 * 5 = 5
    1 * 6 = 6
    1 * 7 = 7
    1 * 8 = 8
    1 * 9 = 9
    1 * 10 = 10

    2 * 1 = 2
    2 * 2 = 4
    2 * 3 = 6
    2 * 4 = 8
    2 * 5 = 10
    2 * 6 = 12
    2 * 7 = 14
    2 * 8 = 16
    2 * 9 = 18
    2 * 10 = 20
*/


// for loop over array
// let arr = [1,2,3,4,4,5,56,5]    // array index starts from 0
// for (let i = 0; i < arr.length; i++) {      // if you try to access the index which is out of the range then it will not give error for 'arrayIndexOutOfBound' exception it will return value as 'undefinded'
//     console.log(arr[i]);
// }
/*
    1
    2
    3
    4
    4
    5
    56
    5
*/

// let arr2 = [1,2,3,4,4,5,56,5]    // array index starts from 0
// for (let i = 0; i < arr2.length+3; i++) {      // if you try to access the index which is out of the range then it will not give error for 'arrayIndexOutOfBound' exception it will return value as 'undefinded'
//     console.log(arr2[i]);
// }
/*
    1
    2
    3
    4
    4
    5
    56
    5
    undefined
    undefined
    undefined
*/



 // break and continue keyword
//  for (let i = 0; i < 10; i++) {
//     if(i == 3){
//         continue        // continue will skip the current iteration
//     }
//     if(i == 8){
//         break           // break will terminate entire loop
//     }
//     console.log(i);
//  }
/*
    0
    1
    2
    4
    5
    6
    7
*/
// as you can see continue skip the iteration for 3 and break terminate loop on 8 even after the last index was 9




//----------------------------------- while loop -------------------------------------------------------

// let i = 0
// while(i<10){
//     console.log(i);
//     i++
// }
/*
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
*/

// let arr = [1,2,3,4,5]
// let i=0
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }
/*
    1
    2
    3
    4
    5
*/

// let i=1
// do {
//     console.log(i);
//     i++;
// } while (i<10);
/*  
    1
    2
    3
    4
    5
    6
    7
    8
    9
*/

/*----------Note :- there is an diff. in while and do while loop 
                    in while loop you check for the condition first then print 
                    but in do while loop first execute and then check
*/

// for example
// let i=3
// while(i<=2){
//     console.log(i)
//     i++
// }   // this will print nothing because first check for the condition

// let j=3
// do {
//     console.log(j)
//     j++
// } while (j<=2);     // 3    // this will print 3 because first execute one time and then check for the condition

