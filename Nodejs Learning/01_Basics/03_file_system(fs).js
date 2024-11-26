// file handling or file system(fs)

const fs = require('fs')

// ------------------------------------- create file or override --------------------------------
// synchronous way 
// fs.writeFileSync("./test.txt" , "Hello Js")
// fs.writeFileSync("./test.txt" , "Good morning") // it will override the content of the file because the file is already there
// so it file not exist then create a new file otherwise override the file content

// asynchronous way
// fs.writeFile("./test.txt" , "Good to see you" , (err) => {})     

// -------------------------------------------- read file ----------------------------------------- 
// synchronous way
// const result = fs.readFileSync("./test.txt" , "utf-8")    // it will store the value inside the variable 
// console.log(result)

// asynchronous way
// fs.readFile("./test.txt" , "utf-8",(err , result)=>{ // if you try to store the value into variable it will gives and error because async not store any value just use the callback function fot it
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })  // Good to see you // read the file and 

// -------------------------------------------- append --------------------------------------
// fs.appendFileSync("./test.txt" , `\n${Date()} appended`)

//-------------------------------------------- copy file ---------------------------------------
// fs.copyFileSync("./test.txt" , "./copy.txt")    // new file created as 'copy.txt' and copy all data of 'test.txt' to 'copy.txt'

// ------------------------------------------ delete ------------------------------------------
// fs.unlinkSync("./copy.txt")     // this will delete the particular file

// ----------------------------------------- properties of the file -----------------------------------
// console.log(fs.statSync("./test.txt"))
/*
    Stats {
    dev: 516459724,
    mode: 33206,
    nlink: 1,
    uid: 0,
    gid: 0,
    rdev: 0,
    blksize: 4096,
    ino: 1125899907129372,
    size: 535,
    blocks: 8,
    atimeMs: 1732535217202.2578,
    mtimeMs: 1732535214962.4949,
    ctimeMs: 1732535214962.4949,
    birthtimeMs: 1732533961634.9421,
    atime: 2024-11-25T11:46:57.202Z,
    mtime: 2024-11-25T11:46:54.962Z,
    ctime: 2024-11-25T11:46:54.962Z,
    birthtime: 2024-11-25T11:26:01.635Z
    }
*/


// ------------------------------------------ create folder ----------------------------------------
// fs.mkdirSync("testing folder")  // create new folder inside current directory

