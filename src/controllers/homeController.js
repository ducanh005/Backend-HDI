const connection = require("../config/database");

const getHomePage = (req, res) => {
    return res.render("home.ejs");
};

const getABC = (req, res) => {
    res.send("Hello World getABC");
};

const getDanh = (req, res) => {
    res.render("sammple.ejs");
};

module.exports = {
    getHomePage,
    getABC,
    getDanh,
};
