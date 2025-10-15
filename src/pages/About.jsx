import React from "react";


const About = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(rgba(30,60,114,0.7), rgba(42,82,152,0.7)), url('https://ec.europa.eu/eurostat/documents/747990/17157919/Davide_Angelini_AdobeStock_437556662_RV.jpg/ecb23e13-0be4-354d-f4a8-25c0ff17d413?t=1689325477418')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "8rem 2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
          About Shirshr Travel Agency
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "600px",
            margin: "0 auto",
            opacity: 0.9,
          }}
        >
          Your trusted partner for authentic Shirshr Travel Agency experiences
          since 2010
        </p>
      </section>

      {/* Content Section */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Story Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              marginBottom: "5rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "2rem",
                  color: "#0610e9",
                  marginBottom: "1.5rem",
                }}
              >
                Our Story
              </h3>
              <p
                style={{
                  fontSize: "1.3rem",
                  lineHeight: 1.8,
                  fontWeight: "bold",
                  color: "#a06c70",
                  marginBottom: "1rem",
                }}
              >
                Founded in 2010, Shirshr Travel Agency was born from a deep
                passion for showcasing the incredible beauty, rich history, and
                vibrant culture of Ethiopia to the world.
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  lineHeight: 1.8,
                  fontWeight: "bold",
                  color: "#a06c70",
                  marginBottom: "1rem",
                }}
              >
                What started as a small local tour company has grown into one of
                Ethiopia's most trusted travel agencies, serving thousands of
                international visitors each year.
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  lineHeight: 1.8,
                  color: "#a06c70",
                  marginBottom: "1rem",
                }}
              >
                Our mission is to provide authentic, sustainable, and
                unforgettable travel experiences that not only showcase
                Ethiopia's wonders but also support local communities and
                preserve our cultural heritage.
              </p>
            </div>
            <div
              style={{
                height: "400px",
                background:
                  'url("https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            ></div>
          </div>

          {/* Values Section */}
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#0610e9",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Our Values
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "5rem",
            }}
          >
            <div
              style={{
                background: "#ffbc70",
                padding: "2rem",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#1e3c72",
                  marginBottom: "1rem",
                }}
              >
                Authentic Experiences
              </h3>
              <p style={{ color: "#666", lineHeight: 1.6 }}>
                We believe in providing genuine cultural experiences that
                connect travelers with the real Ethiopia.
              </p>
            </div>
            <div
              style={{
                background: "#ffbc70",
                padding: "2rem",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#1e3c72",
                  marginBottom: "1rem",
                }}
              >
                Safety First
              </h3>
              <p style={{ color: "#666", lineHeight: 1.6 }}>
                Your safety and security are our top priorities. We ensure all
                tours meet international safety standards.
              </p>
            </div>
            <div
              style={{
                background: "#ffbc70",
                padding: "2rem",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#1e3c72",
                  marginBottom: "1rem",
                }}
              >
                Local Partnerships
              </h3>
              <p style={{ color: "#666", lineHeight: 1.6 }}>
                We work closely with local communities to create sustainable
                tourism that benefits everyone.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div
            style={{
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              color: "white",
              padding: "4rem 2rem",
              margin: "5rem 0",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#ffd700",
                    marginBottom: "0.5rem",
                  }}
                >
                  5000+
                </div>
                <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
                  Happy Travelers
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#ffd700",
                    marginBottom: "0.5rem",
                  }}
                >
                  50+
                </div>
                <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
                  Tour Destinations
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#ffd700",
                    marginBottom: "0.5rem",
                  }}
                >
                  15+
                </div>
                <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
                  Years Experience
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#ffd700",
                    marginBottom: "0.5rem",
                  }}
                >
                  98%
                </div>
                <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
