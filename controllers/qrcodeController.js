const qrcodeModel = require("../models/qrcodeModel");

exports.generate = async (req, res) => {
  try {
    // 모델의 generateQRCode 함수 호출하여 QR 코드 이미지 생성
    const qrImage = await qrcodeModel.generateQRCode();

    // JSON 형태로 클라이언트에 이미지 데이터 응답
    res.json({ qrImage });
  } catch (err) {
    res.status(500).json({ error: "QR 코드 생성 실패" });
  }
};