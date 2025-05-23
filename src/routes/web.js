const express = require("express");
const {
    getHomePage,
    getABC,
    getDanh,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
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
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);
module.exports = router;
