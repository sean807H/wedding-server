const shareModel = require("../models/shareModel");

// 카카오톡 공유에 필요한 데이터 응답
exports.getShareData = (req, res) => {
  try {
    const data = shareModel.getKakaoShareData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "공유 데이터 불러오기 실패" });
  }
};