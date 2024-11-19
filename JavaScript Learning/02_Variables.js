// VARIABLES

// the way you are able to declare the const and variables 

// the way of declare const
const accountId = 1244242

//two way to declare variable 1. let and 2. var
let accountEmail = "temp@gmail.com"
var accountPassword = "1234"

/* but its batter to not use var because in initail days when js comes there is an problem of scope
for example :- there are multiple programers working on one project and one prog declare variable var accountId = 10 and then someone other
prog. comes and declare same variable var accountId = 12 then the value of var accountId will get changed to 12 
so experianced developer suggest to not use var in code */

/* this is
multiline 
comment */

//js also allow to use variable without any datatype but dont use 
accountCity = "Mumbai"


//--------------- Note :- prefer to use only const and let for declaring the variable------------------------------
let checkingVariable = 10
// let checkingVariable = 20    // let dont allows variable to declare new variable with same name after once declare

var checkingVariable2 = 20
var checkingVariable2 = 20  // var allows variable to declare new variable with same name after once declare so this is the main problem with var 


// accountId = 2       // it will give and error because you can not modify const variable once it initialize
accountEmail = "temp2@gmail.com"
accountPassword = "5566"
accountCity = "Bangalore"

console.log(accountId)  // 1244242
console.table([accountEmail , accountPassword , accountCity])   // it will print all the values of variable in table formate at once so
                                                                // we dont need to write console.log() for every variable
                                                                
                                                                // │ (index) │      Values       │
                                                                // ├─────────┼───────────────────┤
                                                                // │    0    │ 'temp2@gmail.com' │
                                                                // │    1    │      '5566'       │
                                                                // │    2    │    'Bangalore'    │
                                                                // └─────────┴───────────────────


let accountState;       // semicolan was not mandatory in JS
let accountState2        // semicolan was not mandatory in JS
console.log(accountState)   // in JS if you declare variable without initialization and try to printit then it will print "undefine" 