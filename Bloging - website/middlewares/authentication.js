const { verifyToken } = require('../service/authentication')

function checkForAuthenticationCookie(cookieName){
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName]
        if(!tokenCookieValue){return next();}

        try {
            const userPayload = verifyToken(tokenCookieValue)
            // console.log(userPayload)
            req.user = userPayload
            // console.log(req.user)
        } catch (error) {}
        next();
    }
}

module.exports = {
    checkForAuthenticationCookie
}