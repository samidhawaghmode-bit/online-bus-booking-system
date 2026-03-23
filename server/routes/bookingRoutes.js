const express = require("express");
const db = require("../db");

const router = express.Router();

// BOOK BUS
router.post("/book", (req, res) => {
  const { user_id, bus_id, seats, journey_date } = req.body;

  db.query(
    "INSERT INTO bookings (user_id,bus_id,seats,journey_date) VALUES (?,?,?,?)",
    [user_id, bus_id, seats, journey_date],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Booked ✅");
    }
  );
});

// MY BOOKINGS
router.get("/my/:id", (req, res) => {
  db.query(
    `SELECT b.bus_name,b.source,b.destination,bk.seats
     FROM bookings bk
     JOIN buses b ON bk.bus_id=b.id
     WHERE user_id=?`,
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

// ALL BOOKINGS
router.get("/all", (req, res) => {
  db.query(
    `SELECT u.name,b.bus_name,bk.seats
     FROM bookings bk
     JOIN users u ON bk.user_id=u.id
     JOIN buses b ON bk.bus_id=b.id`,
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

module.exports = router;