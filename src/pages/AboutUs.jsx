import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />  
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.heading}>About Us</h1>

          <p style={styles.text}>
            Welcome to our learning platform! 🚀  
            Our goal is to make learning simple, engaging, and accessible for
            everyone.
          </p>

          <p style={styles.text}>
            We believe education should be practical, fun, and tailored to real
            world needs. Whether you’re just starting out or sharpening your
            skills, we’re here to help you grow.
          </p>

          <h2 style={styles.subHeading}>Our Mission</h2>
          <p style={styles.text}>
            To empower learners with high-quality content and tools that make
            continuous learning easy and enjoyable.
          </p>

          <h2 style={styles.subHeading}>Why Choose Us?</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>✔ Simple and user-friendly platform</li>
            <li style={styles.listItem}>✔ Practical, real-world focused learning</li>
            <li style={styles.listItem}>✔ Secure authentication with Clerk</li>
            <li style={styles.listItem}>✔ Continuous updates and improvements</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#000", // Black background
    paddingTop: "60px",
    paddingBottom: "60px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "#111", // Slightly lighter black for the container
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(255, 215, 0, 0.3)", // subtle golden shadow
    color: "#eee", // Default text color
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "25px",
    color: "#FFD700", // Golden color
    textAlign: "center",
    textShadow: "1px 1px 4px rgba(255,215,0,0.7)", // Golden shadow
  },
  subHeading: {
    fontSize: "1.8rem",
    marginTop: "30px",
    marginBottom: "10px",
    color: "#FFD700", // Golden color
    textShadow: "1px 1px 3px rgba(255,215,0,0.5)",
  },
  text: {
    fontSize: "1.05rem",
    lineHeight: "1.8",
    marginBottom: "15px",
    color: "#eee",
  },
  list: {
    marginTop: "15px",
    paddingLeft: "25px",
  },
  listItem: {
    marginBottom: "10px",
    fontSize: "1rem",
    color: "#eee",
    padding: "8px 12px",
    borderLeft: "4px solid #FFD700", // golden bar on left
    backgroundColor: "#1a1a1a",
    borderRadius: "6px",
  },
};

export default AboutUs;
