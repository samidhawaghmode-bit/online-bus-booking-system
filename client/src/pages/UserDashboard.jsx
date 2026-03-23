import { useState } from "react";
import { API } from "../services/api";
import BusCard from "../components/BusCard";
import Navbar from "../components/Navbar";

export default function UserDashboard() {
  const [search, setSearch] = useState({ source: "", destination: "" });
  const [buses, setBuses] = useState([]);

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const res = await API.get("/bus/search", { params: search });
      setBuses(res.data);
    } catch (err) {
      alert("Error fetching buses ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2>Find Your Bus 🚌</h2>

        <div style={styles.searchBox}>
          <input
            name="source"
            placeholder="source"
            onChange={handleChange}
          />
          <input
            name="destination"
            placeholder="destination"
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div style={styles.grid}>
          {buses.length > 0 ? (
            buses.map((bus) => (
              <BusCard key={bus.id} bus={bus} />
            ))
          ) : (
            <p>No buses found 🚫</p>
          )}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: { padding: "20px" },
  searchBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "15px",
  },
};