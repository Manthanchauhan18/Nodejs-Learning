const express = require('express')
const path = require('path')
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const connectMongoDb = require('./connection');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');

const blogModel = require('./models/blog')

const app = express();
const PORT = 8000

// middleware
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve('./public')))

// seting ejs file location and type
app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

// connect mongoDb
connectMongoDb("mongodb://127.0.0.1:27017/blogify")
.then(() => {console.log("MongoDb connected!")})
.catch((err) => {console.log(`Error: ${err}`)})

// routes
app.get('/', async (req, res) => {
    const allBlogs = await blogModel.find({})
    return res.render("home",{
        user: req.user,
        blogs: allBlogs
    })
})
app.use('/user', userRoute)
app.use('/blog', blogRoute)

app.listen(PORT, console.log(`Server started on port:${PORT} `))