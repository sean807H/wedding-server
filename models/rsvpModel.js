const conn = require("../db");

exports.getAllRSVPs = (callback) => {
  conn.query("SELECT * FROM rsvp ORDER BY id DESC", callback);
};

exports.createRSVP = (data, callback) => {
  const { side, name, isAttending, phone, meal, guests } = data;

  conn.query(
    "INSERT INTO rsvp (side, name, isAttending, phone, meal, guests) VALUES (?, ?, ?, ?, ?, ?)",
    [
      side,
      name,
      isAttending === "참석",
      phone,
      meal === "참석",
      guests
    ],
    callback
  );
};