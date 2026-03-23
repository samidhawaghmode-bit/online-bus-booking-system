import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.nav}>
        {user && <span>Hi, {user.name}</span>}
      <h2 style={{ cursor: "pointer" , color:"white"}} onClick={() => navigate("/")}>
        🚌 BusBooking
      </h2>

      <div style={styles.links}>
        {user?.role === "user" && (
          <>
            <button onClick={() => navigate("/user")}>Home</button>
            <button onClick={() => navigate("/my-bookings")}>My Bookings</button>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <button onClick={() => navigate("/admin")}>Dashboard</button>
          </>
        )}

        {!user && (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </>
        )}

        {user && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#222",
    color: "white"
  },
  links: {
    display: "flex",
    gap: "10px"
  }
};