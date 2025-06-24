const express = require("express");
const router = express.Router();
const conn = require("../db");

// RSVP 전체 목록 조회
router.get("/", (req, res) => {
  conn.query("SELECT * FROM rsvp ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// RSVP 작성 (저장)
router.post("/", (req, res) => {
  const { side, name, isAttending, phone, meal, guests } = req.body;
  conn.query(
    "INSERT INTO rsvp (side, name, isAttending, phone, meal, guests) VALUES (?, ?, ?, ?, ?, ?)",
    [side, name, isAttending === "참석", phone, meal === "참석", guests],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.sendStatus(201);
    }
  );
});

module.exports = router;