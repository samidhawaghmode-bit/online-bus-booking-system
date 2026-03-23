const express = require("express");
const db = require("../db");

const router = express.Router();

// ADD BUS
router.post("/add", (req, res) => {
  const { bus_name, source, destination, price } = req.body;

  db.query(
    "INSERT INTO buses (bus_name,source,destination,price) VALUES (?,?,?,?)",
    [bus_name, source, destination, price],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Bus Added ✅");
    }
  );
});

// GET ALL
router.get("/", (req, res) => {
  db.query("SELECT * FROM buses", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// SEARCH
router.get("/search", (req, res) => {
  const { source, destination } = req.query;

  db.query(
    "SELECT * FROM buses WHERE source=? AND destination=?",
    [source, destination],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

module.exports = router;