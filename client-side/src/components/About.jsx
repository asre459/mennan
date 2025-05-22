import React from "react";
import aboutImage from "../../src/assets/asre.png"; // Proper import for image

function About() {
  return (
    <div style={styles.wrapper}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <img src={aboutImage} alt="About Background" style={styles.heroImage} />
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>About Menna</h1>
          <p style={styles.heroSubtitle}>ስለ እኛ</p>
          <a href="/donate" style={styles.donateButton}>
            Donate Now
          </a>
        </div>
      </header>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <div style={styles.grid}>
          <div>
            <img src={aboutImage} alt="Menna" style={styles.image} />
          </div>
          <div style={styles.aboutText}>
            <h2 style={styles.sectionTitle}>
              About <span style={styles.highlight}>Menna</span>
            </h2>
            <p style={styles.paragraph}>
              <strong>Background of the Organization:</strong> Menna Elderly &
              Mentally Challenging Support Center is a local, non-profit,
              non-governmental organization founded in 2014 in Gondar by
              university students. Initially called "Menna Free Food Service,"
              its main activity was providing daily supper to homeless
              individuals.
              <br />
              <br />
              Over time, Menna evolved into a holistic care center, now
              offering shelter, food, clothing, and medical assistance to
              elderly and mentally challenged individuals without support.
              <br />
              <br />
              <strong>Meaning:</strong> The word “MENNA” means new light, new
              hope, and unexpected free food.
              <br />
              <br />
              <strong>Profile:</strong>
              <br />
              Name: MENNA Elderly and Mentally Challenging Support Center
              <br />
              Established: 2014
              <br />
              Type: Local NGO
              <br />
              Registration Number: 046
              <br />
              City: Gondar, Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={styles.missionSection}>
        <div style={styles.centeredContent}>
          <h2 style={styles.sectionTitleWhite}>Our Mission</h2>
          <p style={styles.whiteParagraph}>
            Build the best support system that creates meaningful impact for
            vulnerable individuals, and lead efforts that inspire compassion and
            care.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section style={styles.visionSection}>
        <div style={styles.centeredContent}>
          <h2 style={styles.sectionTitleWhite}>Our Vision</h2>
          <p style={styles.whiteParagraph}>
            We strive to go above and beyond for the people we serve. Our vision
            is to provide dignity, care, and hope for every person in need.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    color: "#1f2937", // gray-900
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  hero: {
    position: "relative",
    height: "500px",
    overflow: "hidden",
  },
  heroImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 1rem",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    color: "#fff",
    marginTop: "0.5rem",
  },
  donateButton: {
    marginTop: "1.5rem",
    backgroundColor: "#dc2626",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
    textDecoration: "none",
  },

  aboutSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2.5rem",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "left",
    // We'll do a media query with JS fallback below
  },
  aboutText: {
    maxWidth: "600px",
  },
  image: {
    width: "100%",
    borderRadius: "0.75rem",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "1rem",
  },
  highlight: {
    color: "#ef4444", // red-500
  },
  paragraph: {
    fontSize: "1.125rem",
    lineHeight: "1.75",
    color: "#374151", // gray-700
  },
  missionSection: {
    background: "linear-gradient(to right, #ef4444, #b91c1c)",
    color: "#fff",
    padding: "5rem 1rem",
  },
  visionSection: {
    background: "linear-gradient(to right, #5eead4, #14b8a6)",
    color: "#fff",
    padding: "5rem 1rem",
  },
  centeredContent: {
    maxWidth: "768px",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionTitleWhite: {
    fontSize: "2.75rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  whiteParagraph: {
    fontSize: "1.25rem",
    lineHeight: "1.75",
  },
};

// Add media query for grid columns dynamically
// This function updates styles.grid to 2 columns on wider screens
if (typeof window !== "undefined") {
  const updateGridColumns = () => {
    if (window.innerWidth >= 768) {
      styles.grid.gridTemplateColumns = "1fr 1fr";
      styles.grid.justifyItems = "start";
    } else {
      styles.grid.gridTemplateColumns = "1fr";
      styles.grid.justifyItems = "center";
    }
  };
  updateGridColumns();
  window.addEventListener("resize", updateGridColumns);
}

export default About;
