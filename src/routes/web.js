const express = require("express");
const { getHomePage,getABC,getDanh,postCreateUser,getCreatePage} = require("../controllers/homeController");
const router = express.Router();

// router.method('/route',handle)

router.get("/", getHomePage);

router.get("/alo", getABC);

router.get("/danh", getDanh)
router.get("/create", getCreatePage)

router.post("/create-user", postCreateUser)
module.exports = router;
