const express = require("express");
const {
    getHomePage,
    getABC,
    getDanh,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
} = require("../controllers/homeController");
const router = express.Router();

// router.method('/route',handle)

router.get("/", getHomePage);

router.get("/alo", getABC);

router.get("/danh", getDanh);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
module.exports = router;
