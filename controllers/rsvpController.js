// DB 연결 모듈 불러오기
const conn = require("../db");

// RSVP 전체 목록 조회
exports.getAll = (req, res) => {
  // rsvp 테이블에서 모든 데이터를 id 역순으로 가져오기
  conn.query("SELECT * FROM rsvp ORDER BY id DESC", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// RSVP 작성 (등록)
exports.create = (req, res) => {
  // 클라이언트로부터 받은 RSVP 정보 추출
  const { side, name, isAttending, phone, meal, guests } = req.body;

  // DB에 RSVP 정보 저장
  conn.query(
    "INSERT INTO rsvp (side, name, isAttending, phone, meal, guests) VALUES (?, ?, ?, ?, ?, ?)",
    [
      side,                              
      name,                              
      isAttending === "참석",           
      phone,                         
      meal === "참석",                 
      guests                          
    ],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.sendStatus(201);
    }
  );
};