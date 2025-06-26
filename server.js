const express = require("express");
const cors = require("cors");
const app = express();

// 라우터 불러오기
const guestbookRoutes = require("./routes/guestbookRoutes");
const rsvpRoutes = require("./routes/rsvpRoutes");

// 미들웨어 설정
app.use(cors()); // 다른 포트 간 통신 허용
app.use(express.json()); // JSON 요청 파싱

// 라우터 연결
app.use("/guestbook", guestbookRoutes);
app.use("/rsvp", rsvpRoutes);

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 서버 실행됨: http://localhost:${PORT}`);
});

//클라이언트가 다른 도메인 또는 포트의 서버(API)에 요청할 때 발생하는 보안 문제를 해결
//예를 들어, localhost:3000에서 서버를 돌리고, 클라이언트는 localhost:3001에서 돌 때 CORS가 없으면 요청이 차단됨