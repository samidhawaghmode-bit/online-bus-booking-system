import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
     <Navbar />
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={{color:"white"}}>Bus Reservation System 🚌</h1>
        <p>Travel Smart, Travel Easy</p>

        <div style={styles.buttons}>
          <button onClick={() => navigate("/login")}>User Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
          <button onClick={() => navigate("/admin-login")}>Admin Login</button>
        </div>
      </div>
    </div>
    </>
  );
}

const styles = {
 
  overlay: {
    
    // background: "rgba(0,0,0,0.6)",
    height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  }
};