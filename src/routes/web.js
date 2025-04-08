const express = require("express");
const { getHomePage,getABC,getDanh } = require("../controllers/homeController");
const router = express.Router();

// router.method('/route',handle)

router.get("/", getHomePage);

router.get("/alo", getABC);

router.get("/danh", getDanh)
module.exports = router;
