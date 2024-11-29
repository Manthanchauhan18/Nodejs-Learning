const {getUser} = require('../service/auth')

async function restrictToLoggedInUserOnly(req, res, next){
    // console.log(req.cookies.uid)
    const userUid = req.cookies.uid

    if(!userUid) return res.json({message: "return from middleware"});
    const user = getUser(userUid)

    if(!user) return res.json({message: "middleware successful"});

    req.user = user;
    next();

} 

module.exports = {
    restrictToLoggedInUserOnly
}
