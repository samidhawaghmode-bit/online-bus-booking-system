import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../services/api"; // ✅ ADD THIS
import "../styles/global.css";
import Navbar from "../components/Navbar";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate(); // ✅ ADD THIS

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("user", JSON.stringify(res.data));

      // redirect based on role
      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

    } catch (err) {
      console.log(err);
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2>User Login</h2>

          <label>Email</label>
          <input id="email" onChange={handleChange} required />

          <label>Password</label>
          <input type="password" id="password" onChange={handleChange} required />

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
    alignItems: "center"
  },
  card: {
    background: "white",
    padding: "30px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray"
  }
};