import { API } from "../services/api";

export default function BusCard({ bus }) {

  const handleBook = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first ❌");
      return;
    }

    await API.post("/booking/book", {
      user_id: user.id,
      bus_id: bus.id,
      seats: 1,
      journey_date: "2026-04-01"
    });

    alert("Booking Successful ✅");
  };

  return (
    <div style={styles.card}>
      <h3>{bus.bus_name}</h3>

      <p>
        {bus.source} → {bus.destination}
      </p>

      <p>💰 ₹{bus.price}</p>

      <button onClick={handleBook}>Book Now</button>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray",
    transition: "0.3s"
  }
};