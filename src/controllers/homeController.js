const { get } = require("../routes/web")

const getHomePage = (req,res)=>{
    //process data
    //call modal
    res.send("Hello World gethomepage")
}

const getABC =(req,res)=>{
    res.send("Hello World getABC")
}

const getDanh=(req,res)=>{
    res.render('sammple.ejs')
}

module.exports = {
    getHomePage,getABC,getDanh
}