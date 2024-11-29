const mongoose = require('mongoose')

async function connectionWithDb(url){
    return mongoose.connect(url)
}

module.exports = {
    connectionWithDb
}