const connection = require("../config/database");
const { use } = require("../routes/web");
const {
    getAllUsers,
    getUserById,
    updateUserById,
} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", { listUsers: results });
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
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render("edit.ejs", { userEdit: user });
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    // let{email,name,city} = req.body;

    res.send("Create user success!");
};
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    // let{email,name,city} = req.body;

    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    //     [email, name, city]
    // );
    await updateUserById(userId, email, name, city);
    res.redirect("/");
};

module.exports = {
    getHomePage,
    getABC,
    getDanh,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
};
