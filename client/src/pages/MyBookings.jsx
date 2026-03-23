import { useEffect, useState } from "react";
import { API } from "../services/api";
import Navbar from "../components/Navbar";

export default function MyBookings() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    API.get(`/booking/my/${user.id}`)
      .then(res => setData(res.data));
  }, []);

  return (
    <>
     <Navbar />
    <div style={styles.container}>
      <h2>My Bookings 🎟️</h2>
        if (!user) return <h2>Please login</h2>;
      <div style={styles.grid}>
        {data.map((b, i) => (
          <div key={i} style={styles.card}>
            <h3>{b.bus_name}</h3>
            <p>{b.source} → {b.destination}</p>
            <p>Seats: {b.seats}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

const styles = {
  container: { padding: "20px" },
  grid: {
    display: "grid",
    gap: "15px"
  },
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray"
  }
};