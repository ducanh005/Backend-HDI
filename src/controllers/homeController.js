const connection = require("../config/database");
const {getAllUsers} = require("../services/CRUDService")
const getHomePage =async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs",{listUsers:results});
};

const getABC = (req, res) => {
    res.send("Hello World getABC");
};

const getDanh = (req, res) => {
    res.render("sammple.ejs");
};

const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log(email, name, city);
    // let{email,name,city} = req.body;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
    );
    res.send("Create user success!");

    // connection.query(
    //     'select * from Users u',
    //     function (err, results) {
    //         if (err) throw err;
    //         console.log(results);
    //     }
    // )
    // const [results, fields] = await connection.query("select * from Users u");
    // console.log(results); // Log the results to the console
};

module.exports = {
    getHomePage,
    getABC,
    getDanh,
    postCreateUser,
    getCreatePage,
};
