import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Tours" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { currentTheme, toggleTheme, theme } = useTheme();
  const location = useLocation();

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return "☀️";
      case "dark":
        return "🌙";
      case "default":
        return "🎨";
      default:
        return "🎨";
    }
  };

  return (
    <nav
      style={{
        background: currentTheme.navbarBackground,
        padding: "1rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: `0 2px 10px ${currentTheme.shadow}`,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: currentTheme.navbarText,
            textDecoration: "none",
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            transition: "color 0.2s",
          }}
        >
          Shirshr Travel Agency
        </Link>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color:
                  location.pathname === link.to
                    ? currentTheme.accent
                    : currentTheme.navbarText,
                textDecoration: "none",
                fontWeight: location.pathname === link.to ? "bold" : "500",
                fontSize: "1.05rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                background:
                  location.pathname === link.to
                    ? currentTheme.navbarActive
                    : "transparent",
                boxShadow:
                  location.pathname === link.to
                    ? `0 2px 8px ${currentTheme.shadow}`
                    : "none",
                transition: "all 0.2s",
                position: "relative",
                outline: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.to) {
                  e.target.style.background = currentTheme.navbarHover;
                  e.target.style.color = currentTheme.primary;
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.to) {
                  e.target.style.background = "transparent";
                  e.target.style.color = currentTheme.navbarText;
                }
              }}
              tabIndex={0}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "0.5rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              color: currentTheme.navbarText,
            }}
            title={`Switch to ${
              theme === "default"
                ? "light"
                : theme === "light"
                ? "dark"
                : "default"
            } mode`}
          >
            {getThemeIcon()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
