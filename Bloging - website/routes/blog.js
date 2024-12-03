const {Router} = require('express')
const { handleGetAddBlog, handlePostAddBlog, handleGetBlogById, handlePostCommentByBlogId } = require('../controllers/blog')
const router = Router()

router.get('/add-new-blog',handleGetAddBlog) 
router.post('/add-new-blog',handlePostAddBlog) 
router.get('/:id', handleGetBlogById)
router.post('/comment/:blogId',handlePostCommentByBlogId)

module.exports = router