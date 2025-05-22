import React from "react";

const styles = {
  container: {
    backgroundColor: "#f9fafb", // light surface color
    minHeight: "100vh",
    overflow: "hidden",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heroSection: {
    position: "relative",
    borderRadius: "0 0 1rem 1rem",
    color: "white",
    padding: "5rem 1rem 6rem",
    textAlign: "center",
    overflow: "hidden",
    background: "linear-gradient(90deg, #16a34a 0%, #0d9488 100%)",
  },
  heroBackgroundImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  heroOverlayBlack: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  heroOverlayGradient: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(22,163,74,0.85) 0%, rgba(13,148,136,0.85) 100%)",
    zIndex: 2,
  },
  heroContent: {
    position: "relative",
    zIndex: 10,
    maxWidth: "90rem",
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    lineHeight: 1.1,
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    opacity: 0.9,
  },
  heroButton: {
    display: "inline-block",
    background:
      "linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)",
    color: "white",
    fontWeight: "600",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.375rem",
    boxShadow: "0 10px 15px -3px rgba(239,68,68,0.5)",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
  },
  heroButtonHover: {
    transform: "scale(1.1)",
    backgroundColor: "#f87171",
  },
  causesList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2.5rem",
    padding: "2rem",
    maxWidth: "90rem",
    margin: "0 auto",
  },
  causeItem: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "0.5rem",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  causeItemHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 15px rgba(0,0,0,0.15)",
  },
  causeImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  causeContent: {
    padding: "1rem 1.5rem 2rem",
    flex: "1",
  },
  causeTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1e293b", // slate-900
    marginBottom: "0.5rem",
  },
  causeText: {
    fontSize: "0.95rem",
    color: "#475569", // slate-600
    lineHeight: 1.4,
  },
  donateLink: {
    display: "inline-flex",
    alignItems: "center",
    marginTop: "1.5rem",
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#fff",
    background:
      "linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)",
    borderRadius: "9999px",
    textDecoration: "none",
    boxShadow: "0 4px 6px rgba(239,68,68,0.5)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  donateLinkHover: {
    backgroundColor: "#f87171",
    transform: "scale(1.1)",
  },
  donateArrow: {
    marginLeft: "0.75rem",
    stroke: "#cbd5e1", // slate-300
  },
};

function OurCause() {
  // For button hover effect with React inline styles, you can use useState or CSS hover,
  // but here we'll keep it simple without JS interactivity.
  // You can enhance it later with React state if needed.

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <img
          src="/static/back1-d38a1f2db30abd7d5dc809578644229d.jpg"
          alt="News background"
          style={styles.heroBackgroundImage}
        />
        <div style={styles.heroOverlayBlack}></div>
        <div style={styles.heroOverlayGradient}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Causes</h1>
          <p style={styles.heroSubtitle}>የእኛ ጉዳይ</p>
          <a
            href="/donate"
            style={styles.heroButton}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Cause Items */}
      <ul style={styles.causesList}>
        {[
          {
            title: "Incontinence supplies",
            text:
              "Kindly Donate to help us provide severely needed incontinence supplies, including diapers, bed pads, gloves, and more to our 2500 bedridden and mental disabled residents.",
            image:
              "https://cms.mennacenter.com/uploads/photo_41_2024_06_24_11_08_57_d6d2c1b50a.jpg",
          },
          {
            title: "Building Our New Home",
            text:
              "Kindly help us build a home for the homeless, bed riders, elders, physically impaired, visually impaired, and for bed riders. Every gift matters! By doing so you will build your heavenly home!",
            image:
              "https://cms.mennacenter.com/uploads/photo_8_2024_06_24_11_08_57_b79706da38.jpg",
          },
        ].map((cause, index) => (
          <li
            key={index}
            style={styles.causeItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 10px 15px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={cause.image}
              alt={cause.title}
              style={styles.causeImage}
              loading="lazy"
            />
            <div style={styles.causeContent}>
              <h3 style={styles.causeTitle}>{cause.title}</h3>
              <p style={styles.causeText}>{cause.text}</p>
              <a
                href="/donate"
                style={styles.donateLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f87171";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Donate
                <svg
                  style={styles.donateArrow}
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9 8L1 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OurCause;
