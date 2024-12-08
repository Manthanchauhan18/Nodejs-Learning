const {Router} = require('express')
const { handleGetBlog, handlePostBlog, handleGetBlogById } = require('../controllers/blog')

const router = Router()

router.get('/',handleGetBlog )
router.post('/create',handlePostBlog )
router.get('/:blogId', handleGetBlogById)

module.exports = router