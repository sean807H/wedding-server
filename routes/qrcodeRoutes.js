const express = require("express");
const router = express.Router();
const controller = require("../controllers/qrcodeController");

router.get("/", controller.generate);

module.exports = router;