const blogModel = require('../models/blog')
const multer = require('multer')
const path = require('path')
const commentModel = require('../models/comment')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(`./public/uploads`))
    },
    filename: function(req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
    }
})

const upload = multer({storage: storage})

async function handleGetAddBlog(req, res){
    return res.render('addBlog', {
        user: req.user
    })
}

async function handlePostAddBlog(req, res){
    upload.single('coverImage')(req, res, async(err) => {
        console.log(req.file)
        const {title, body} = req.body
        const blog = await blogModel.create({
            title,
            body,
            createdBy: req.user._id,
            coverImageUrl: `/uploads/${req.file.filename}` 
        })
    })
    return res.redirect('/')
}

async function handleGetBlogById(req, res){
    const blog = await blogModel.findById(req.params.id).populate('createdBy')
    const comments = await commentModel.find({blogId: req.params.id}).populate('createdBy')
    return res.render('blog',{
        user: req.user,
        blog,
        comments
    })
}

async function handlePostCommentByBlogId(req, res){
    await commentModel.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id
    })

    return res.redirect(`/blog/${req.params.blogId}`)
}

module.exports = {
    handleGetAddBlog,
    handlePostAddBlog,
    handleGetBlogById,
    handlePostCommentByBlogId
}