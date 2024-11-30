const shortid = require("shortid")
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res){
    const body = req.body;
    console.log(body.url)
    if(!body.url) return res.status(400).json({error: "url is requied"} )

    const shortId = shortid()
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.json({ id: shortId})
}

async function handleRedirectUrl(req , res){
    const shortId = req.params.shortId;
    console.log(shortId)
    const entry = await URL.findOneAndUpdate({
        shortId
    },
    {
        $push:{
            visitHistory : {
                timestamp: Date.now()
            },
        },
    }
    );
    res.redirect(entry.redirectUrl)
}

async function handleAnalytics(req , res){
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    return res.status(200).json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectUrl,
    handleAnalytics
}