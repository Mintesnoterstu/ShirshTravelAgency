import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const NationalMuseumDetails = () => {
  const { currentTheme } = useTheme();
  console.log("NationalMuseumDetails component is rendering!"); // Debug log

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
          background: `linear-gradient(rgba(30,60,114,0.5), rgba(42,82,152,0.5)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b9/09/c9/national-museum.jpg?w=2000&h=-1&s=1')`,
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
          National Museum of Ethiopia - Cradle of Humankind
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
          Where Lucy Walks You Through Millennia of History
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
          A Journey Through Ethiopia's Living Legacy
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
              marginBottom: "1rem",
              color: currentTheme.text,
            }}
          >
            Step into the <strong>National Museum of Ethiopia</strong> in Addis
            Ababa, where the nation's 3,000-year history unfolds across four
            fascinating floors. This is much more than a museum—it's:
          </p>
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
                  color: currentTheme.primary,
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                🦴
              </span>
              <div style={{ color: currentTheme.text }}>
                <strong>Home to "Lucy"</strong>, our 3.2 million-year-old
                ancestor
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
                  color: currentTheme.primary,
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                👑
              </span>
              <div style={{ color: currentTheme.text }}>
                <strong>Guardian of Ethiopia's imperial treasures</strong>
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
                  color: currentTheme.primary,
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                🎨
              </span>
              <div style={{ color: currentTheme.text }}>
                <strong>Showcase of Africa's diverse artistic heritage</strong>
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
          ✨ Must-See Exhibits
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              color: currentTheme.primary,
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            1. Paleontology Wing (Basement)
          </h3>
          <div
            style={{
              background: currentTheme.surface,
              padding: "1.5rem",
              borderRadius: "10px",
              border: "1px solid #e9ecef",
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
                  🦴
                </span>
                <div>
                  Meet <strong>Lucy (Dinkinesh)</strong>, the most famous
                  Australopithecus afarensis skeleton
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
                  👶
                </span>
                <div>
                  See <strong>Selam</strong>, the 3.3 million-year-old "Lucy's
                  baby"
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
                  🛠️
                </span>
                <div>
                  Marvel at <strong>prehistoric tools</strong> used by early
                  humans
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
            2. Archaeological Treasures (Ground Floor)
          </h3>
          <div
            style={{
              background: currentTheme.surface,
              padding: "1.5rem",
              borderRadius: "10px",
              border: "1px solid #e9ecef",
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
                  🏛️
                </span>
                <div>
                  <strong>Aksumite artifacts</strong> including ancient coins
                  and the <strong>Maqdala treasures</strong>
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
                  👑
                </span>
                <div>
                  <strong>Medieval royal crowns</strong> adorned with gold and
                  gemstones
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
                  📜
                </span>
                <div>
                  <strong>Ancient Sabaean inscriptions</strong> from
                  pre-Christian Ethiopia
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
            3. Ethnographic Gallery (Second Floor)
          </h3>
          <div
            style={{
              background: currentTheme.surface,
              padding: "1.5rem",
              borderRadius: "10px",
              border: "1px solid #e9ecef",
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
                  👗
                </span>
                <div>
                  <strong>Traditional costumes</strong> from 80+ Ethiopian
                  ethnic groups
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
                  ⛪
                </span>
                <div>
                  <strong>Liturgical art</strong> including processional crosses
                  and illuminated bibles
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
                  🎵
                </span>
                <div>
                  <strong>Musical instruments</strong> used in sacred ceremonies
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
            4. Imperial Collection (Top Floor)
          </h3>
          <div
            style={{
              background: currentTheme.surface,
              padding: "1.5rem",
              borderRadius: "10px",
              border: "1px solid #e9ecef",
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
                  🛏️
                </span>
                <div>
                  <strong>Emperor Haile Selassie's bedroom</strong> recreated
                  with original furnishings
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
                  👑
                </span>
                <div>
                  <strong>Coronation robes</strong> and gifts from world leaders
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
                  📸
                </span>
                <div>
                  <strong>Historical photographs</strong> documenting Ethiopia's
                  resistance to colonization
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
          Why This Museum Stands Apart
        </h2>
        <div
          style={{
            background: currentTheme.surface,
            padding: "1.5rem",
            borderRadius: "10px",
            border: "1px solid #28a745",
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
                  color: "#28a745",
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                ✔
              </span>
              <strong>
                Contains Africa's most important paleontological finds
              </strong>
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
                  color: "#28a745",
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                ✔
              </span>
              <strong>Air-conditioned respite</strong> from Addis Ababa's hustle
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
                  color: "#28a745",
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                ✔
              </span>
              <strong>Perfect orientation</strong> before exploring Ethiopia's
              historic sites
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
          📅 Visitor Tips
        </h2>
        <div
          style={{
            background: currentTheme.surface,
            padding: "1.5rem",
            borderRadius: "10px",
            border: "1px solid #ffc107",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ color: "#856404", marginBottom: "0.5rem" }}>
              👥 Guided Tours
            </h3>
            <p>Available in multiple languages</p>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ color: "#856404", marginBottom: "0.5rem" }}>
              📸 Photography
            </h3>
            <p>Allowed (no flash)</p>
          </div>
          <div>
            <h3 style={{ color: "#856404", marginBottom: "0.5rem" }}>
              🔗 Combine With
            </h3>
            <p>
              Nearby <strong>Holy Trinity Cathedral</strong>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #2E8B57, #3CB371)",
          color: "white",
          padding: "2rem",
          borderRadius: "15px",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>
          🚀 Ready to Experience These Wonders?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <em>
            Shirshr Travel Agency specializes in seamless museum visits and
            spiritually significant adventures—from Addis Ababa's halls to
            Tigray's cliffs.
          </em>
        </p>
        <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
          📞 Contact us today to book your museum adventure!
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link
          to="/tours"
          style={{
            background: "#2E8B57",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "10px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "1rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            transition: "background 0.3s ease",
          }}
        >
          Back to Tours
        </Link>
      </div>
    </div>
  );
};

export default NationalMuseumDetails;
