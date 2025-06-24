const express = require("express");
const cors = require("cors");
const app = express();

const guestbookRoutes = require("./routes/guestbookRoutes");
const rsvpRoutes = require("./routes/rsvpRoutes");

app.use(cors());
app.use(express.json());

app.use("/guestbook", guestbookRoutes);
app.use("/rsvp", rsvpRoutes);  // RSVP 라우터 추가

app.listen(3000, () => {
  console.log("🚀 서버 실행됨: http://localhost:3000");
});

//클라이언트(예: React 앱)가 다른 도메인 또는 포트의 서버(API)에 요청할 때 발생하는 보안 문제를 해결
//예를 들어, localhost:3000에서 서버를 돌리고, 클라이언트는 localhost:3001에서 돌 때 CORS가 없으면 요청이 차단됨
