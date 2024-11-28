const express = require('express')
const router = express.Router()
const {handleGenerateNewShortURL, handleRedirectUrl, handleAnalytics} = require("../controllers/url")

router.post('/' , handleGenerateNewShortURL)
router.get('/:shortId' , handleRedirectUrl)
router.get('/analytics/:shortId' , handleAnalytics)

module.exports = router