const { Schema, model } = require("mongoose")

const blogSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    body:{
        type: String,
        require: true
    },
    coverImageUrl:{
        type: String
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
},{timestamps: true})

const blogModel = model('blog', blogSchema)

module.exports = blogModel