const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/bus", busRoutes);
app.use("/booking", bookingRoutes);

const PORT = 5000; // ✅ changed

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} 🚀`);
});