const mongoose = require('mongoose')

async function conntectMongoDb(url){
    return await mongoose.connect(url)
}

module.exports = conntectMongoDb