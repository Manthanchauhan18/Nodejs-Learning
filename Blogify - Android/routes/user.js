const {Router} = require('express')
const { handlePostUserLogin, handlePostUserRegistration, handleGetUsers } = require('../controllers/user')

const router = Router()

router.post('/login', handlePostUserLogin)
router.post('/signup', handlePostUserRegistration)
router.get('/', handleGetUsers)

module.exports = router