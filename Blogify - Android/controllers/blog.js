const blogModel = require('../models/blog')
const multer = require('multer')
const path = require('path')
const userModel = require('../models/user')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve('./public/uploads'))
    },
    fileName: function(req, file, cb){
        const fileName = `${Date.now()}-${file.originalname}`
        ob(null, fileName)
    }
})

const upload = multer({storage: storage})


async function handleGetBlog(req, res){
    const blogs = await blogModel.find({})
    return res.status(200).json(blogs)
}

async function handlePostBlog(req, res){
    // upload.single('blogImage')(req, res, async(err) => {
        const {blogTitle, blogBody} = req.body
        const userId = req.query.userId
        const userFromUserId = await userModel.findById(userId)
        // console.log(userFromUserId)
        try {
            const blog = await blogModel.create({
                blogTitle,
                blogBody,
                createdBy: {userFromUserId} 
            })
            console.log(blog)
            return res.status(200).json({message: "blog created Successfuly"})
        } catch (err) {
            return res.status(400).json({error: err.message})
        }   
    // })
    
}

async function handleGetBlogById(req, res){
    try {
        const blogId = req.params.blogId
        const blogById = await blogModel.findById(blogId)
        return res.status(200).json(blogById)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
    
}

module.exports = {
    handleGetBlog,
    handlePostBlog,
    handleGetBlogById
}