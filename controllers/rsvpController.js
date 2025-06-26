const rsvpModel = require("../models/rsvpModel");

exports.getAll = (req, res) => {
  rsvpModel.getAllRSVPs((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.create = (req, res) => {
  rsvpModel.createRSVP(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(201);
  });
};