import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const BlueNileFallsDetails = () => {
  const { currentTheme } = useTheme();
  console.log("BlueNileFallsDetails component is rendering!"); // Debug log

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
          background: `linear-gradient(rgba(30,60,114,0.5), rgba(42,82,152,0.5)), url('https://sabisatour.com/wp-content/uploads/2022/12/Blue_Nile_Falls-2-960x636.jpg')`,
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
          Blue Nile Falls - The Smoking Water
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
          Where the Blue Nile Plunges into the Abyss
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
          Witness Nature's Power
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
            Welcome to the <strong>Blue Nile Falls</strong>, known locally as
            "Tis Abay" (Smoking Water), one of Ethiopia's most spectacular
            natural wonders. Located about{" "}
            <strong>30 kilometers from Bahir Dar</strong>, these magnificent
            falls cascade down a <strong>45-meter drop</strong> over volcanic
            rock formations, creating a thunderous spectacle that has awed
            visitors for centuries. The falls are at their most impressive
            during the <strong>rainy season</strong> (June-September) when the
            Blue Nile swells with water from Lake Tana, creating a breathtaking
            display of nature's raw power.
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
          ✨ The Blue Nile Falls Experience
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              color: currentTheme.primary,
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            1. The Main Falls
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
              The Smoking Water
            </p>
            <p style={{ marginBottom: "1rem", color: currentTheme.text }}>
              Experience the <strong>majestic Blue Nile Falls</strong> in all
              their glory:
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
                  💧
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>45-Meter Drop</strong>: The falls plunge dramatically
                  over <strong>ancient volcanic rock</strong>.
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
                  🌈
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Rainbow Views</strong>: Spectacular{" "}
                  <strong>rainbows</strong> form in the mist during sunny days.
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
                  🌊
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Thunderous Sound</strong>: The{" "}
                  <strong>roar of falling water</strong> creates an
                  unforgettable atmosphere.
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
            2. The Portuguese Bridge
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
              Historical Crossing
            </p>
            <p style={{ marginBottom: "1rem", color: currentTheme.text }}>
              Cross the <strong>17th-century Portuguese Bridge</strong> for
              spectacular views:
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
                  🌉
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Stone Architecture</strong>: Built by{" "}
                  <strong>Portuguese missionaries</strong> in the 1600s.
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
                  <strong>Perfect Photo Spot</strong>: Capture{" "}
                  <strong>panoramic views</strong> of the falls and gorge.
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
                  <strong>Historical Significance</strong>: Part of Ethiopia's{" "}
                  <strong>colonial heritage</strong> and trade routes.
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
            3. Seasonal Variations
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
                  🌧️
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Rainy Season (June-September)</strong>:{" "}
                  <strong>Maximum water flow</strong> and dramatic spectacle.
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
                  ☀️
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Dry Season (October-May)</strong>:{" "}
                  <strong>Clearer views</strong> and easier access to
                  viewpoints.
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
                  🌅
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Golden Hour</strong>: <strong>Sunset visits</strong>{" "}
                  offer magical lighting and fewer crowds.
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
          🌍 Why Blue Nile Falls Belongs on Your Bucket List
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
                <strong>Natural Wonder</strong> – One of Africa's most
                spectacular waterfalls.
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
                <strong>Historical Bridge</strong> – 17th-century Portuguese
                architecture.
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
                <strong>Seasonal Drama</strong> – Different experiences
                throughout the year.
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
                <strong>Easy Access</strong> – Convenient location near Bahir
                Dar.
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
              June–September for maximum water flow, October–May for clearer
              views.
            </p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: "0.5rem" }}>
              ⏰ Best Time of Day
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: currentTheme.text,
              }}
            >
              <li>
                <strong>Early Morning</strong>: Cool temperatures and soft
                lighting.
              </li>
              <li>
                <strong>Late Afternoon</strong>: Golden hour light and rainbow
                opportunities.
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
                <strong>Half Day</strong>
              </h4>
              <p style={{ color: currentTheme.text }}>
                Falls visit, Portuguese Bridge crossing
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
                <strong>1 Day</strong>
              </h4>
              <p style={{ color: currentTheme.text }}>
                Add Lake Tana monastery visits
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
                Complete Bahir Dar cultural experience
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
          💧 Ready to Witness the Power of the Blue Nile?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <em>
            Let Shirshr Travel Agency guide you to Ethiopia's most spectacular
            waterfall.
          </em>
        </p>
        <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
          📞 Contact us today to book your waterfall adventure!
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

export default BlueNileFallsDetails;
