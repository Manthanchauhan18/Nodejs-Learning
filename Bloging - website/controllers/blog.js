const blogModel = require('../models/blog')
const multer = require('multer')
const path = require('path')

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

module.exports = {
    handleGetAddBlog,
    handlePostAddBlog
}