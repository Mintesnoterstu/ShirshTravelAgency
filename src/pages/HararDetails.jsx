import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const HararDetails = () => {
  const { currentTheme } = useTheme();
  console.log("HararDetails component is rendering!"); // Debug log

  return (
    <div
      style={{
        paddingTop: "100px",
        background: currentTheme.background,
        minHeight: "100vh",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          background: `linear-gradient(rgba(255,140,0,0.5), rgba(255,255,255,0.2)), url('https://www.ethiosports.com/wp-content/uploads/2015/07/Harar-Wall.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          padding: "3rem 2rem",
          borderRadius: "15px",
          marginBottom: "2rem",
          boxShadow: `0 4px 15px ${currentTheme.shadow}`,
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "2.5rem",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.89)",
          }}
        >
          Harar - The Walled City of Saints
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            textAlign: "center",
            fontStyle: "italic",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.89)",
            maxWidth: "800px",
          }}
        >
          Where Islamic Heritage Meets Ethiopian Culture
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            color: currentTheme.primary,
            fontSize: "1.8rem",
            marginBottom: "1rem",
          }}
        >
          A Journey Through Time
        </h2>
        <div
          style={{
            background: currentTheme.surface,
            padding: "1.5rem",
            borderRadius: "10px",
            borderLeft: `4px solid ${currentTheme.primary}`,
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: currentTheme.text,
            }}
          >
            Welcome to <strong>Harar</strong>, Ethiopia's most mysterious and
            enchanting city. This <strong>UNESCO World Heritage Site</strong> is
            a living museum of Islamic architecture, culture, and tradition.
            With its{" "}
            <strong>82 mosques, 102 shrines, and labyrinthine alleyways</strong>
            , Harar offers visitors a glimpse into a world where time seems to
            stand still. From the famous <strong>hyena feeding ritual</strong>{" "}
            to the vibrant markets and traditional coffee ceremonies, every
            corner of this walled city tells a story.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            color: currentTheme.primary,
            fontSize: "1.8rem",
            marginBottom: "1rem",
          }}
        >
          ✨ Top Experiences in Harar
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              color: currentTheme.primary,
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            1. The Walled City (Jugol)
          </h3>
          <div
            style={{
              background: currentTheme.cardBackground,
              padding: "1.5rem",
              borderRadius: "10px",
              border: `1px solid ${currentTheme.border}`,
              boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            }}
          >
            <p
              style={{
                marginBottom: "1rem",
                fontWeight: "bold",
                color: currentTheme.primary,
              }}
            >
              Medieval Maze of Wonder
            </p>
            <p style={{ marginBottom: "1rem", color: currentTheme.text }}>
              Explore the <strong>ancient walled city</strong> with its narrow
              cobblestone streets and traditional houses:
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🏰
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Five Historic Gates</strong>: Enter through{" "}
                  <strong>
                    Erer Ber, Buda Ber, Sanga Ber, Felana Ber, and Argob Ber
                  </strong>
                  .
                </div>
              </li>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🏠
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Traditional Harari Houses</strong>: Admire the{" "}
                  <strong>distinctive architecture</strong> with ornate wooden
                  balconies and colorful facades.
                </div>
              </li>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🛤️
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>368 Alleyways</strong>: Get lost in the{" "}
                  <strong>maze-like streets</strong> that have remained
                  unchanged for centuries.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              color: currentTheme.primary,
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            2. Hyena Feeding Ritual
          </h3>
          <div
            style={{
              background: currentTheme.cardBackground,
              padding: "1.5rem",
              borderRadius: "10px",
              border: `1px solid ${currentTheme.border}`,
              boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            }}
          >
            <p
              style={{
                marginBottom: "1rem",
                fontWeight: "bold",
                color: currentTheme.primary,
              }}
            >
              Night of the Hyenas
            </p>
            <p style={{ marginBottom: "1rem", color: currentTheme.text }}>
              Experience one of Harar's most <strong>unique traditions</strong>{" "}
              - the nightly hyena feeding:
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🌙
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Sunset Ritual</strong>: Watch as{" "}
                  <strong>hyena men</strong> call the wild hyenas from the
                  surrounding hills.
                </div>
              </li>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🍖
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Hand Feeding</strong>: Witness the{" "}
                  <strong>incredible bond</strong> between humans and these wild
                  predators.
                </div>
              </li>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  📸
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Photo Opportunities</strong>: Capture this{" "}
                  <strong>once-in-a-lifetime experience</strong> (with
                  permission).
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              color: currentTheme.primary,
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            3. Religious and Cultural Sites
          </h3>
          <div
            style={{
              background: currentTheme.cardBackground,
              padding: "1.5rem",
              borderRadius: "10px",
              border: `1px solid ${currentTheme.border}`,
              boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🕌
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Grand Jami Mosque</strong>: Visit the{" "}
                  <strong>oldest mosque</strong> in Harar, dating back to the
                  10th century.
                </div>
              </li>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🏛️
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Rimbaud House</strong>: Explore the former home of{" "}
                  <strong>French poet Arthur Rimbaud</strong>, now a museum.
                </div>
              </li>
              <li
                style={{
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.accent,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🎨
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Harari Cultural Museum</strong>: Learn about the{" "}
                  <strong>rich traditions</strong> and history of the Harari
                  people.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            color: currentTheme.primary,
            fontSize: "1.8rem",
            marginBottom: "1rem",
          }}
        >
          🌍 Why Harar Belongs on Your Bucket List
        </h2>
        <div
          style={{
            background: currentTheme.surface,
            padding: "1.5rem",
            borderRadius: "10px",
            border: `1px solid ${currentTheme.accent}`,
          }}
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li
              style={{
                marginBottom: "0.8rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: currentTheme.accent,
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                ✔
              </span>
              <div style={{ color: currentTheme.text }}>
                <strong>UNESCO World Heritage Site</strong> – One of the holiest
                cities in Islam.
              </div>
            </li>
            <li
              style={{
                marginBottom: "0.8rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: currentTheme.accent,
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                ✔
              </span>
              <div style={{ color: currentTheme.text }}>
                <strong>Unique Traditions</strong> – The only place in the world
                where hyenas are hand-fed.
              </div>
            </li>
            <li
              style={{
                marginBottom: "0.8rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: currentTheme.accent,
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                ✔
              </span>
              <div style={{ color: currentTheme.text }}>
                <strong>Cultural Fusion</strong> – Where Islamic, Ethiopian, and
                African cultures meet.
              </div>
            </li>
            <li
              style={{
                marginBottom: "0.8rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: currentTheme.accent,
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                ✔
              </span>
              <div style={{ color: currentTheme.text }}>
                <strong>Authentic Experience</strong> – A living city that
                hasn't been over-commercialized.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            color: currentTheme.primary,
            fontSize: "1.8rem",
            marginBottom: "1rem",
          }}
        >
          📅 Best Time to Visit
        </h2>
        <div
          style={{
            background: currentTheme.surface,
            padding: "1.5rem",
            borderRadius: "10px",
            border: `1px solid ${currentTheme.accent}`,
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ color: currentTheme.primary, marginBottom: "0.5rem" }}>
              🌤️ Optimal Season
            </h3>
            <p style={{ color: currentTheme.text }}>
              October–March (dry season). Avoid heavy rains in July–August.
            </p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: "0.5rem" }}>
              🌙 Cultural Events
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: currentTheme.text,
              }}
            >
              <li>
                <strong>Ramadan</strong>: Experience the city's spiritual
                atmosphere.
              </li>
              <li>
                <strong>Eid Celebrations</strong>: Witness traditional
                festivities and processions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            color: currentTheme.primary,
            fontSize: "1.8rem",
            marginBottom: "1rem",
          }}
        >
          🗺️ Suggested Itineraries
        </h2>
        <div
          style={{
            background: currentTheme.cardBackground,
            padding: "1.5rem",
            borderRadius: "10px",
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
            }}
          >
            <div
              style={{
                padding: "1rem",
                background: currentTheme.surface,
                borderRadius: "8px",
              }}
            >
              <h4
                style={{ color: currentTheme.primary, marginBottom: "0.5rem" }}
              >
                <strong>1 Day</strong>
              </h4>
              <p style={{ color: currentTheme.text }}>
                Walled city tour, hyena feeding
              </p>
            </div>
            <div
              style={{
                padding: "1rem",
                background: currentTheme.surface,
                borderRadius: "8px",
              }}
            >
              <h4
                style={{ color: currentTheme.primary, marginBottom: "0.5rem" }}
              >
                <strong>2 Days</strong>
              </h4>
              <p style={{ color: currentTheme.text }}>
                Add museums, markets, coffee ceremonies
              </p>
            </div>
            <div
              style={{
                padding: "1rem",
                background: currentTheme.surface,
                borderRadius: "8px",
              }}
            >
              <h4
                style={{ color: currentTheme.primary, marginBottom: "0.5rem" }}
              >
                <strong>3 Days</strong>
              </h4>
              <p style={{ color: currentTheme.text }}>
                Complete cultural immersion experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
          color: "white",
          padding: "2rem",
          borderRadius: "15px",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>
          🏰 Ready to Explore the Walled City of Saints?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <em>
            Let Shirshr Travel Agency guide you through the mystical streets and
            traditions of Harar.
          </em>
        </p>
        <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
          📞 Contact us today to book your cultural adventure!
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link
          to="/tours"
          style={{
            background: currentTheme.primary,
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "10px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "1rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
        >
          Back to Tours
        </Link>
      </div>
    </div>
  );
};

export default HararDetails;
