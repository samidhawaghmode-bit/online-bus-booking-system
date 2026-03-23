import { useState } from "react";
import { API } from "../services/api";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  const [bus, setBus] = useState({
    bus_name: "",
    source: "",
    destination: "",
    price: ""
  });

  const handleChange = (e) => {
  setBus({
    ...bus,
    [e.target.name]: e.target.value
  });
};

  const addBus = async () => {
    await API.post("/bus/add", bus);
    alert("Bus Added ✅");
  };

  return (
    <div style={styles.container}>
         <Navbar />
      <h2>Admin Dashboard 👨‍💼</h2>

      <div style={styles.card}>
        <h3>Add Bus</h3>

        <input placeholder="bus_name" onChange={handleChange} />
        <input placeholder="source" onChange={handleChange} />
        <input placeholder="destination" onChange={handleChange} />
        <input placeholder="price" onChange={handleChange} />

        <button onClick={addBus}>Add Bus</button>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px" },
  card: {
    background: "white",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray"
  }
};