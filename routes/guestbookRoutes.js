const express = require("express");
const router = express.Router();
const conn = require("../db");

// 전체 목록 조회 - 날짜 포맷 적용
router.get("/", (req, res) => {
  const sql = `
    SELECT 
      id, 
      name, 
      message, 
      DATE_FORMAT(date, '%Y.%m.%d') as date 
    FROM guestbook 
    ORDER BY id DESC
  `;
  conn.query(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 방명록 작성 - 현재 날짜도 함께 저장
router.post("/", (req, res) => {
  const { name, message } = req.body;
  const now = new Date(); // 현재 시간 생성

  conn.query(
    "INSERT INTO guestbook (name, message, date) VALUES (?, ?, ?)",
    [name, message, now],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.sendStatus(201);
    }
  );
});

// 방명록 삭제
router.delete("/:id", (req, res) => {
  conn.query("DELETE FROM guestbook WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

module.exports = router;