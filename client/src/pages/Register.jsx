import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../services/api";
import "../styles/global.css";
import Navbar from "../components/Navbar";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", form);

      console.log(res.data);

      alert("Registration Successful ✅");

      // redirect to login
      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Registration Failed ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2>Register</h2>

          <label>Name</label>
          <input id="name" onChange={handleChange} required />

          <label>Email</label>
          <input id="email" onChange={handleChange} required />

          <label>Password</label>
          <input type="password" id="password" onChange={handleChange} required />

          <button type="submit">Register</button>
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