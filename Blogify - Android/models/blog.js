const {Schema , model} = require('mongoose')

const blogSchema = new Schema({
    blogTitle: {
        type: String,
        require: true
    },
    blogBody: {
        type: String,
        require: true
    },
    blogImage: {
        type: String
    },
    createdBy: {
        type: Object,
        ref: 'User'
    }
},{timestamps: true})

const blogModel = model('Blog', blogSchema)

module.exports = blogModel