const QRCode = require("qrcode");

const WEDDING_URL = "https://getting-married-orcin.vercel.app/";

exports.generateQRCode = () => {
  return new Promise((resolve, reject) => {
    // qrcode 라이브러리로 URL을 QR 코드 데이터 URI로 변환
    QRCode.toDataURL(WEDDING_URL, { width: 200 }, (err, dataUrl) => {
      if (err) {
        reject(err);    // 실패
      } else {
        resolve(dataUrl);   // 성공
      }
    });
  });
};