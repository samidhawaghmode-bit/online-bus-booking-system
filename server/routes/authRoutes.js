const express = require("express");
const db = require("../db");

const router = express.Router();

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
    [name, email, password, "user"],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Registered ✅");
    }
  );
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) return res.status(500).send(err);

      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(401).send("Invalid credentials");
      }
    }
  );
});

module.exports = router;