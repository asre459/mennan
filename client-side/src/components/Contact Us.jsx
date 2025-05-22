import React from "react";

const styles = {
  heroContainer: {
    position: "relative",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
    padding: "5rem 1rem",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
  },
  heroBackgroundImg: {
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  heroOverlayGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, #16a34a, #14b8a6)", // from-green-600 to-teal-500
    zIndex: 2,
  },
  heroContent: {
    position: "relative",
    zIndex: 3,
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
  },
  donateBtn: {
    display: "inline-block",
    background: "linear-gradient(to right, #ef4444, #b91c1c)", // from-red-500 to-red-700
    color: "white",
    fontWeight: "600",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.375rem",
    boxShadow: "0 10px 15px -3px rgba(239,68,68,0.5), 0 4px 6px -2px rgba(220,38,38,0.5)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
  },
  donateBtnHover: {
    transform: "scale(1.1)",
  },

  contactSection: {
    backgroundColor: "white",
    padding: "4rem 1.5rem",
    maxWidth: "1120px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "4rem",
  },
  contactSectionLarge: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  contactInfo: {
    color: "#4b5563", // gray-700
  },
  contactTitle: {
    fontSize: "2.25rem",
    fontWeight: "700",
    color: "#7f1d1d", // red-900
    marginBottom: "1.5rem",
  },
  contactText: {
    fontSize: "1.125rem",
    marginBottom: "1.5rem",
    lineHeight: 1.6,
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    color: "#374151", // gray-700
  },
  contactIcon: {
    width: "28px",
    height: "28px",
    objectFit: "contain",
  },
  contactTextWithIcon: {
    marginLeft: "0.75rem",
    fontSize: "1rem",
  },

  formContainer: {
    backgroundColor: "white",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    borderRadius: "0.5rem",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  formLabel: {
    display: "block",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#374151",
  },
  formInput: {
    width: "100%",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "1.5px solid #d1d5db", // gray-300
    fontSize: "1rem",
    outline: "none",
    transition: "box-shadow 0.2s ease",
  },
  formInputFocus: {
    borderColor: "#4f46e5", // indigo-600
    boxShadow: "0 0 0 3px rgba(99,102,241,0.5)", // indigo shadow
  },
  formTextarea: {
    minHeight: "120px",
    resize: "vertical",
  },
  submitButton: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#dc2626", // red-600
    color: "white",
    fontWeight: "700",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#4f46e5", // indigo-500
  },
};

function ContactUs() {
  // Handle focus styles for inputs (optional enhancement)
  const [focused, setFocused] = React.useState({});

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };
  const handleBlur = (field) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      {/* Hero Section */}
      <div style={styles.heroContainer}>
        <img
          src="/static/back1-d38a1f2db30abd7d5dc809578644229d.jpg"
          alt="News background"
          style={styles.heroBackgroundImg}
        />
        <div style={styles.heroOverlayBlack}></div>
        <div style={styles.heroOverlayGradient}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Contact</h1>
          <p style={styles.heroSubtitle}>ያግኙን</p>
          <a
            href="/donate"
            style={styles.donateBtn}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div
        style={{
          ...styles.contactSection,
          ...(window.innerWidth >= 1024 ? styles.contactSectionLarge : {}),
        }}
      >
        {/* Contact Info */}
        <div style={styles.contactInfo}>
          <h2 style={styles.contactTitle}>Get in Touch</h2>
          <p style={styles.contactText}>We are optimists who love to work together</p>

          {[ "+251934641309", "+251934641310", "+33664495674", "+14257800316", "+15713989298" ].map((phone, index) => (
            <div key={index} style={styles.contactItem}>
              <img
                src="../../src/assets/phone.png"
                alt="Phone icon"
                style={styles.contactIcon}
              />
              <span style={styles.contactTextWithIcon}>{phone}</span>
            </div>
          ))}

          <div style={styles.contactItem}>
            <img
              src="../../src/assets/asreE.jpg"
              alt="Email icon"
              style={styles.contactIcon}
            />
            <span style={styles.contactTextWithIcon}>Mennainfo@gmail.com</span>
          </div>

          <div style={styles.contactItem}>
            <img
              src="../../src/assets/location.png"
              alt="Location icon"
              style={styles.contactIcon}
            />
            <p style={{ ...styles.contactTextWithIcon, maxWidth: "350px" }}>
              Gondar City Kebele 15 Around Stadium Next to Basketball Court
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form style={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label style={styles.formLabel} htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              style={{
                ...styles.formInput,
                ...(focused.name ? styles.formInputFocus : {}),
              }}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
            />
          </div>
          <div>
            <label style={styles.formLabel} htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              style={{
                ...styles.formInput,
                ...(focused.email ? styles.formInputFocus : {}),
              }}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
            />
          </div>
          <div>
            <label style={styles.formLabel} htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              style={{
                ...styles.formInput,
                ...styles.formTextarea,
                ...(focused.message ? styles.formInputFocus : {}),
              }}
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
            />
          </div>
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6366f1")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
