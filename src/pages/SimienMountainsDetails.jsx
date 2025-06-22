import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const SimienMountainsDetails = () => {
  const { currentTheme } = useTheme();
  console.log("SimienMountainsDetails component is rendering!"); // Debug log

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
          background: `linear-gradient(rgba(34,139,34,0.5), rgba(255,255,255,0.2)), url('https://simienpark.org/wp-content/uploads/2017/10/simien-landscape-small.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          color: "white",
          padding: "4rem 2rem",
          borderRadius: "24px",
          marginBottom: "2rem",
          boxShadow: `0 4px 15px ${currentTheme.shadow}`,
          minHeight: "380px",
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
          Simien Mountains - Africa's Grandest Highlands
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
          Where Jagged Peaks Touch the Sky and Rare Wildlife Roams Free
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
          The Roof of Africa Awaits
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
            Prepare to have your breath stolen - literally and figuratively - in
            Ethiopia's <strong>Simien Mountains National Park</strong>, a UNESCO
            World Heritage Site often called "Africa's Grand Canyon." This
            otherworldly landscape of{" "}
            <strong>
              dramatic escarpments, sheer cliffs, and rolling highland plateaus
            </strong>{" "}
            plunges down nearly 1,500 meters in places, creating one of the
            continent's most spectacular trekking destinations. Home to{" "}
            <strong>
              endemic wildlife, traditional villages, and some of the
              continent's most breathtaking vistas
            </strong>
            , the Simiens offer an adventure that's both physically challenging
            and spiritually uplifting.
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
          ✨ Top Experiences in the Simien Mountains
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              color: currentTheme.primary,
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            1. Trekking Through Cloud Kingdoms
          </h3>
          <div
            style={{
              background: currentTheme.surface,
              padding: "1.5rem",
              borderRadius: "10px",
              border: `1px solid ${currentTheme.primary}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.primary,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🏔️
                </span>
                <div>
                  <strong>Ras Dashen Summit</strong>: Conquer Ethiopia's highest
                  peak at <strong>4,543 meters</strong> on a multi-day
                  expedition
                </div>
              </li>
              <li
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.primary,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  👁️
                </span>
                <div>
                  <strong>Geech to Imet Gogo</strong>: The park's signature hike
                  leads to <strong>360-degree viewpoints</strong> over 100km of
                  jagged peaks
                </div>
              </li>
              <li
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.primary,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🦅
                </span>
                <div>
                  <strong>Sankaber to Chenek</strong>: Spot wildlife while
                  traversing <strong>clifftop trails</strong> with 800m drops
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
            2. Wildlife Encounters You Can't Find Elsewhere
          </h3>
          <div
            style={{
              background: currentTheme.surface,
              padding: "1.5rem",
              borderRadius: "10px",
              border: `1px solid ${currentTheme.primary}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.primary,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🐒
                </span>
                <div>
                  <strong>Gelada Monkeys</strong>: Observe hundreds of these
                  "bleeding-heart baboons" as they{" "}
                  <strong>socialize on cliff edges</strong>
                </div>
              </li>
              <li
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.primary,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🐺
                </span>
                <div>
                  <strong>Ethiopian Wolves</strong>: The world's rarest canid
                  hunts rodents on the <strong>Sanetti Plateau</strong>
                </div>
              </li>
              <li
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.primary,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🐐
                </span>
                <div>
                  <strong>Walia Ibex</strong>: See this endangered mountain goat{" "}
                  <strong>scale near-vertical cliffs</strong> with supernatural
                  ease
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
            3. Cultural Connections
          </h3>
          <div
            style={{
              background: currentTheme.surface,
              padding: "1.5rem",
              borderRadius: "10px",
              border: `1px solid ${currentTheme.primary}`,
              boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: currentTheme.primary,
                    marginRight: "10px",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  🏘️
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Village of Geech</strong>: Experience traditional{" "}
                  <strong>Tigrayan hospitality</strong> in stone huts
                </div>
              </li>
              <li
                style={{
                  marginBottom: "1rem",
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
                  👥
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Local Guides</strong>: Hear stories of the mountains
                  from <strong>born-and-raised Simien experts</strong>
                </div>
              </li>
              <li
                style={{
                  marginBottom: "1rem",
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
                  <strong>Full Moon Trekking</strong>: Join rare{" "}
                  <strong>night hikes</strong> when the lunar landscape glows
                  silver
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
            4. Jaw-Dropping Viewpoints
          </h3>
          <div
            style={{
              background: currentTheme.surface,
              padding: "1.5rem",
              borderRadius: "10px",
              border: `1px solid ${currentTheme.border}`,
              boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "1rem",
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
                  👁️
                </span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Imet Gogo</strong>: The park's most famous{" "}
                  <strong>360° panorama</strong> at 3,926m
                </div>
              </li>
              <li
                style={{
                  marginBottom: "1rem",
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
                  <strong>Jinbar Waterfall</strong>: Watch the river plunge{" "}
                  <strong>500m into the abyss</strong>
                </div>
              </li>
              <li
                style={{
                  marginBottom: "1rem",
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
                  <strong>Arkuasye Pass</strong>: Sunrise here paints the{" "}
                  <strong>entire range gold</strong>
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
          🌍 Why the Simiens Belong on Your Bucket List
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
                <strong>UNESCO World Heritage Site</strong> – Recognized for
                both natural beauty and biodiversity.
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
                <strong>Endemic Wildlife</strong> – See animals found nowhere
                else on Earth.
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
                <strong>Adventure of a Lifetime</strong> – Trekking routes for
                all fitness levels.
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
                <strong>Cultural Immersion</strong> – Connect with local
                communities and traditions.
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
              October–March (dry season). Avoid July–August rains.
            </p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: "0.5rem" }}>
              🏔️ Trekking Tips
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: currentTheme.text,
              }}
            >
              <li>
                <strong>Acclimatization</strong>: Spend 1-2 days in Gondar
                before trekking.
              </li>
              <li>
                <strong>Guides Required</strong>: Park regulations mandate local
                guides.
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
                <strong>3 Days</strong>
              </h4>
              <p style={{ color: currentTheme.text }}>
                Sankaber to Chenek, wildlife viewing
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
                <strong>5 Days</strong>
              </h4>
              <p style={{ color: currentTheme.text }}>
                Geech to Imet Gogo, village visits
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
                <strong>10 Days</strong>
              </h4>
              <p style={{ color: currentTheme.text }}>
                Ras Dashen summit expedition
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
          🏔️ Ready to Conquer the Roof of Africa?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <em>
            Let Shirshr Travel Agency guide you through Ethiopia's most
            spectacular mountain adventure.
          </em>
        </p>
        <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
          📞 Contact us today to book your mountain expedition!
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

export default SimienMountainsDetails;
