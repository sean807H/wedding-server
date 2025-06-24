// 데이터베이스 연결 객체 불러오기
const conn = require("../db");

// 방명록 전체 조회 (최신순 정렬)
exports.getAll = (req, res) => {
  const sql = `
    SELECT id, name, message, DATE_FORMAT(date, '%Y.%m.%d') as date 
    FROM guestbook ORDER BY id DESC
  `;
  
  // DB에서 방명록 전체 조회
  conn.query(sql, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// 방명록 작성
exports.create = (req, res) => {
  const { name, message } = req.body;  // 요청 본문에서 name, message 추출
  const now = new Date();  // 현재 날짜와 시간 구하기

  // DB에 방명록 데이터 삽입
  conn.query(
    "INSERT INTO guestbook (name, message, date) VALUES (?, ?, ?)",
    [name, message, now],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.sendStatus(201);
    }
  );
};

// 방명록 삭제
exports.delete = (req, res) => {
  const id = req.params.id;  // URL에서 전달된 방명록 ID 가져오기

  // 해당 ID를 가진 방명록 항목 삭제
  conn.query("DELETE FROM guestbook WHERE id = ?", [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.sendStatus(204);
  });
};