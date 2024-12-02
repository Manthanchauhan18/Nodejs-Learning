const {Router} = require('express')
const { handleGetAddBlog, handlePostAddBlog } = require('../controllers/blog')
const router = Router()

router.get('/add-new-blog',handleGetAddBlog) 
router.post('/add-new-blog',handlePostAddBlog) 

module.exports = router