const guestbookModel = require("../models/guestbookModel");

// 전체 조회
exports.getAll = (req, res) => {
  guestbookModel.getAllGuestbooks((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// 작성
exports.create = (req, res) => {
  const { name, message } = req.body;

  guestbookModel.createGuestbook({ name, message }, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(201);
  });
};

// 삭제
exports.delete = (req, res) => {
  const id = req.params.id;

  guestbookModel.deleteGuestbook(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
};