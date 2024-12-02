const {Router} = require('express')
const { handlePostSignup, handleGetSignup, handleGetSignin, handlePostSignin, handleUserLogout } = require('../controllers/user')
const router = Router()

router.get('/signin', handleGetSignin)

router.post('/signin', handlePostSignin)

router.get('/signup', handleGetSignup)

router.post('/signup', handlePostSignup)

router.get('/logout', handleUserLogout)

module.exports = router