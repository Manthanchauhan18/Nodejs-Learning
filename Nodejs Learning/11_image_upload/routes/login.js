const express = require('express')
const router = express.Router()
const multer = require('multer')

// multer
// const upload = multer({dest: "uploads/"})

router.get('/', (req, res) => {
    return res.render("homePage")
})

// router.post('/upload', upload.single("profileImage"),(req, res) => {        // this is for single image upload
//     console.log(req.body)
//     console.log(req.file)

//     return res.redirect("/")
// })// so this method upload will be crypted so you can not see the image after uploaded

// router.post('/upload', upload.fields([{name: "profileImage"} , {name: "coverImage"}]),(req, res) => {        // this is for multiple images upload
//     console.log(req.body)
//     console.log(req.file)

//     return res.render("/")
// })


//another way or multer

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "./uploads")
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})

router.post('/upload', upload.single("profileImage"),(req, res) => {        // this is for single image upload
    console.log(req.body)
    console.log(req.file)

    return res.redirect("/")
})

module.exports = router