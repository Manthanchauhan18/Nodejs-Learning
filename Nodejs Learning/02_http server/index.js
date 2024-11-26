const http = require("http")
const fs = require("fs")
const url = require("url")

// const myServer = http.createServer((req , res) => {
//     // console.log('new req reseve')
//     // console.log(req.headers)    // will return all info which user sends
//     const log = `${Date()}: ${req.url}: new request received\n`
//     fs.appendFile("log.txt" , log , (err , result)=>{
//         switch(req.url){    // it will check for the url and do the work according to it
//             case "/": res.end("Homepage")
//                 break;
//             case "/about-us": res.end("I am Manthan Chauhan")
//                 break;
//             default: res.end("404 Page not found")
//         }
//     })
// });

// myServer.listen(8000 , ()=>{"server started."})



// /google?status=true so this not saprater url from ? so for that need to install 'npm i url'

// /*
//     http://localhost:8000/about-us?status=true
//     so in above url if you use above code of switch then you will always go inside the default case 
//     so to avoid that we use 'npm i url' so we will saprate url by queries and all that 
//     so you dont have to worry for parameters just manage the pathname so that no need to manage whole url conditions
//     by using below code
// */
// const myServer = http.createServer((req , res) => {
//     if(req.url === "/favicon.ico") return res.end();    
//     const log = `${Date()}: ${req.url}: new request received\n`
//     const myUrl = url.parse(req.url)
//     console.log(myUrl)
//     /*
//         Url {
//             protocol: null,
//             slashes: null,
//             auth: null,
//             host: null,
//             port: null,
//             hostname: null,
//             hash: null,
//             search: '?status=true',
//             query: 'status=true',
//             pathname: '/about-us',
//             path: '/about-us?status=true',
//             href: '/about-us?status=true'
//         }
//     */
//     fs.appendFile("log.txt" , log , (err , result)=>{
//         switch(myUrl.pathname){    // it will check for the url and do the work according to it
//             case "/": res.end("Homepage")
//                 break;
//             case "/about-us": res.end("I am Manthan Chauhan")
//                 break;
//             default: res.end("404 Page not found")
//         }
//     })
// });

// myServer.listen(8000 , ()=>{"server started."})


// const myServer = http.createServer((req , res) => {
//     if(req.url === "/favicon.ico") return res.end();    
//     const log = `${Date()}: ${req.url}: new request received\n`
//     const myUrl = url.parse(req.url, true)  // this true will auto maticaly saprate the qurey and return in object
//     console.log(myUrl)
//     fs.appendFile("log.txt" , log , (err , result)=>{
//         switch(myUrl.pathname){    // it will check for the url and do the work according to it
//             case "/": res.end("Homepage")
//                 break;
//             case "/about-us": 
//                 const username = myUrl.query.username
//                 res.end(`Hello, ${username}`)   // Hello manthan
//                 break;
//             case "/search": 
//                 const username2 = myUrl.query.username
//                 const search = myUrl.query.search
//                 res.end(`Hello, ${username2} & your search for: ${search}`)   // Hello, manthan & your search for: javascript interview questions
//                 break;
//             default: res.end("404 Page not found")
//         }
//     })
// });

// myServer.listen(8000 , ()=>{"server started."})
/*
    // without using true ,"const myUrl = url.parse(req.url)"
    Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?status=true',
        query: 'status=true',
        pathname: '/about-us',
        path: '/about-us?status=true',
        href: '/about-us?status=true'
    }

    // using true 
    Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?status=true&username=manthan&age=25',
        query: [Object: null prototype] {
            status: 'true',
            username: 'manthan',
            age: '25'
        },
        pathname: '/about-us',
        path: '/about-us?status=true&username=manthan&age=25',
        href: '/about-us?status=true&username=manthan&age=25'
    }
    
*/



// ------------------------------------------- http methods ----------------------------------------
const myServer = http.createServer((req , res) => {
    if(req.url === "/favicon.ico") return res.end();    
    const log = `${Date()}: ${req.method} : ${req.url}: new request received\n`
    const myUrl = url.parse(req.url, true)  // this true will auto maticaly saprate the qurey and return in object
    console.log(myUrl)
    fs.appendFile("log.txt" , log , (err , result)=>{
        switch(myUrl.pathname){    // it will check for the url and do the work according to it
            case "/": if(req.method === 'GET') res.end("Homepage")
                break;
            case "/about-us": 
                const username = myUrl.query.username
                res.end(`Hello, ${username}`)   // Hello manthan
                break;
            case "/search": 
                const username2 = myUrl.query.username
                const search = myUrl.query.search
                res.end(`Hello, ${username2} & your search for: ${search}`)   // Hello, manthan & your search for: javascript interview questions
                break;
                case "/signup" : if(req.method === "GET") res.end("This is Signup page")
                    else if(req.method === 'POST') res.end("SUCCESS")
                break;
            default: res.end("404 Page not found")
        }
    })
});

myServer.listen(8000 , ()=>{"server started."})


/*so this code will create an issue when ever you are working on production level 
    because there are lots of urls and all that thing to manage so for that we use one library which is easily manage this things
*/



