const course = {
    courseName : "Js in hindi",
    coursePrice : "999",
    courseInstructor : "Manthan Chauhan"
}

// console.log(course.courseName);         // Js in hindi
// console.log(course.coursePrice);        // 999
// console.log(course.courseInstructor);   // Manthan Chauhan

// so to avoid writing this 'course.' before variable name just directly want to access the variable using variable name then 
// make variable with name of object variable like below

// const {courseInstructor , coursePrice , courseName} = course
// console.log(courseInstructor);      // Manthan Chauhan
// console.log(coursePrice);           // 999
// console.log(courseName);            // Js in hindi

// you can also able to take any name of the variable which suites you 
const {courseInstructor: instructor , coursePrice: price , courseName} = course
console.log(instructor);      // Manthan Chauhan
console.log(price);           // 999 
console.log(courseName);      // Js in hindi


