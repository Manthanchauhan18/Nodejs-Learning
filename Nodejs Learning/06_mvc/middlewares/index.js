const fs = require('fs')

function logResReq(fileName){
    return (res , req , next) => {
        fs.appendFile(
            fileName,
            `${Date()} : ${req.id} : ${req.method} : ${req.path}\n`,    
            (err , result) => {
                next();
            }
        );
    }
}

module.exports = {
    logResReq
}