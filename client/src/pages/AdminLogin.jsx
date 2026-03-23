import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import Navbar from "../components/Navbar";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // later connect backend
    console.log(form);

    // TEMP: redirect to admin dashboard
    navigate("/admin");
  };

  return (
    <>
     <Navbar />
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2>Admin Login 👨‍💼</h2>

        <label>Email</label>
        <input id="email" onChange={handleChange} />

        <label>Password</label>
        <input type="password" id="password" onChange={handleChange} />

        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5"
  },
  card: {
    background: "white",
    padding: "30px",
    width: "320px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)"
  }
};