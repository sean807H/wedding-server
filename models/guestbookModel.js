const conn = require("../db");

// 방명록 전체 조회
exports.getAllGuestbooks = (callback) => {
  const sql = `
    SELECT id, name, message, DATE_FORMAT(date, '%Y.%m.%d') as date 
    FROM guestbook ORDER BY id DESC
  `;
  conn.query(sql, callback);
};

// 방명록 작성
exports.createGuestbook = ({ name, message }, callback) => {
  const now = new Date();
  conn.query(
    "INSERT INTO guestbook (name, message, date) VALUES (?, ?, ?)",
    [name, message, now],
    callback
  );
};

// 방명록 삭제
exports.deleteGuestbook = (id, callback) => {
  conn.query("DELETE FROM guestbook WHERE id = ?", [id], callback);
};