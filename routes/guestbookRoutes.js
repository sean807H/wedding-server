const express = require("express");
const router = express.Router();
const controller = require("../controllers/guestbookController");

router.get("/", controller.getAll);
router.post("/", controller.create);
router.delete("/:id", controller.delete);

module.exports = router;