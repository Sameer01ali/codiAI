import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.overlay}>
        <div style={styles.container}>
          <h1 style={styles.heading}>
            مرحباً <span style={styles.highlight}>Habibi</span>! 🚀
          </h1>

          <p style={styles.subText}>
            Learn <span style={styles.highlight}>Faster</span>, Code{" "}
            <span style={styles.highlight}>Smarter</span>, and Build{" "}
            <span style={styles.highlight}>مشاريع Innaraic</span>! ✨
          </p>

          <p style={styles.subText}>
            Join our <span style={styles.highlight}>منصة مبتكرة</span>, Habibi, where{" "}
            <span style={styles.highlight}>learning meets innovation</span>.
          </p>

          <p style={styles.subText}>
            Explore <span style={styles.highlight}>JavaScript</span>,{" "}
            <span style={styles.highlight}>React</span>,{" "}
            <span style={styles.highlight}>Python</span>, and{" "}
            <span style={styles.highlight}>Machine Learning</span> in a fun,{" "}
            <span style={styles.highlight}>innaraic</span> way! 🎉
          </p>

          <p style={styles.subText}>
            هل أنت مستعد لتكون <span style={styles.highlight}>Boss</span>, Habibi? 🔥
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    position: "relative",
    backgroundImage: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1950&q=80')", // space photo
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)", // dark overlay for readability
    minHeight: "100vh",
    paddingTop: "60px",
    paddingBottom: "40px",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  heading: {
    fontSize: "3rem",
    color: "#FFD700", // golden color
    marginBottom: "20px",
    textShadow: "2px 2px 10px rgba(255,215,0,0.7)", // glowing effect
  },
  subText: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    marginBottom: "15px",
    color: "#eee",
  },
  highlight: {
    color: "#FFD700", // golden highlights
    fontWeight: "bold",
    textShadow: "1px 1px 6px rgba(255,215,0,0.5)", // subtle glow
  },
};

export default Home;
