// Date and Time

// const date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.log(date.toLocaleString());


// for declaring specific new date

// let createdDate = new Date(2023 , 0 , 23)            // 23/1/2023, 12:00:00 am
// let createdDate = new Date(2023 , 0 , 23 , 14 , 2)   // 23/1/2023, 2:02:00 pm
// let createdDate = new Date(2023 , 0 , 23 , 5 , 3)    // 23/1/2023, 5:03:00 am
// let createdDate = new Date("2023-01-18")                // 18/1/2023, 5:30:00 am
// console.log(createdDate.toLocaleString());


// -------------- time stamp ----------------------
// let timeStamp = Date.now();
// console.log(timeStamp);     // 1731670392430 -> long value in miliseconds
// console.log(Math.round(timeStamp/1000));    // 1731670436  ->  long value in seconds
// console.log(Math.round((timeStamp/1000/60)));    // 28861175  ->  long value in minutes
// console.log(Math.round((timeStamp/1000/60)/60));    // 481020  ->  long value in hours



let date = new Date(2023 , 3 , 1 , 15 , 30)
// console.log(date.toLocaleString()); //15/11/2024, 5:08:25 pm    
// console.log(date.getMonth() + 1);   // 10   // + 1 because the month starts from 0 so 
// console.log(date.getDay());     // 5


// you can also able to formation of date and time
date.toLocaleString('default' ,{
    weekday: "long",
    hour12: true
})




