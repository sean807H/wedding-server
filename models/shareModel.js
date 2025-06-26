// 공유할 데이터 모델 (현재는 고정 메시지, URL 반환)
exports.getKakaoShareData = () => {
    // 실제로 DB에서 가져와도 됨
    return {
      title: "초대합니다! 저희 결혼식에 함께 해 주세요.",
      description: "2025년 7월 20일, 저희 결혼식 초대장입니다.",
      imageUrl: "https://getting-married-orcin.vercel.app/images/wedding-invite.png",
      linkUrl: "https://getting-married-orcin.vercel.app/",
    };
  };  