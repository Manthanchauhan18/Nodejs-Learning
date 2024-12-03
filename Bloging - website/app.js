require('dotenv').config()      // this must be require to use .env file 

//need to change the name of index file to 'app.js' for deployee on aws cloud

const express = require('express')
const path = require('path')
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const connectMongoDb = require('./connection');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');

const blogModel = require('./models/blog')

const app = express();
// const PORT = 8000
// because there on server you have to manage dynamic port so 
const PORT = process.env.PORT || 8000

// middleware
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve('./public')))

// seting ejs file location and type
app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

// connect mongoDb
// connectMongoDb("mongodb://127.0.0.1:27017/blogify") // so this url is also we need to make dynamic for the cloud server
// .then(() => {console.log("MongoDb connected!")})
// .catch((err) => {console.log(`Error: ${err}`)})

connectMongoDb(process.env.MONGO_URL)
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