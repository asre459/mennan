import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          ELDERLY AND MENTALLY CHALLENGING SUPPORT CENTER
        </h1>
        <p style={styles.subtitle}>GONDAR – ETHIOPIA</p>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaContainer}>
        <div style={styles.mennaGlow}>Menna</div>

        <Link to="/donate" style={styles.donateButton}>
          Donate Now
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",
    padding: "20px",
    overflow: "hidden",
  },
  header: {
    zIndex: 1,
    maxWidth: "900px",
    padding: "0 10px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "800",
    marginBottom: "10px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#f0f0f0",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  },
  ctaContainer: {
    position: "absolute",
    bottom: "50px",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    zIndex: 2,
  },
  mennaGlow: {
    fontSize: "2rem",
    background: "linear-gradient(to right, #a1ffce, #faffd1)",
    color: "#111",
    padding: "12px 30px",
    borderRadius: "12px",
    fontWeight: "bold",
    animation: "glow 2s ease-in-out infinite alternate",
    boxShadow: "0 0 15px rgba(255,255,255,0.5)",
  },
  donateButton: {
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
    color: "white",
    padding: "12px 30px",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
  },
};

// Optional: add CSS animation in index.css
// @keyframes glow {
//   from { box-shadow: 0 0 5px #fff; }
//   to { box-shadow: 0 0 20px #fff, 0 0 30px #ff0, 0 0 40px #ff0; }
// }

export default Home;
