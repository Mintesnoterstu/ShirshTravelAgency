import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { currentTheme } = useTheme();

  return (
    <footer
      style={{
        background: currentTheme.footerBackground,
        color: currentTheme.footerText,
        padding: "2rem",
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <p>© 2024 Shirshr Travel Agency. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
