const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0303",
  database: "wedding_db",
});

conn.connect((err) => {
  if (err) {
    console.error("❌ DB 연결 실패:", err.message);
  } else {
    console.log("✅ DB 연결 성공");
  }
});

module.exports = conn;