const express = require("express");
const router = express.Router();
const shareController = require("../controllers/shareController");

router.get("/kakao", shareController.getShareData);

module.exports = router;