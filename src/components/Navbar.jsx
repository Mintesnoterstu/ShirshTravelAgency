import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { currentTheme, toggleTheme, theme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'default':
        return '🎨';
      default:
        return '🎨';
    }
  };

  return (
    <nav style={{
      background: currentTheme.navbarBackground,
      padding: '1rem 2rem',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: `0 2px 10px ${currentTheme.shadow}`,
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          color: currentTheme.navbarText,
          textDecoration: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          Ethiopian Travel
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: currentTheme.navbarText, textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: currentTheme.navbarText, textDecoration: 'none' }}>About</Link>
          <Link to="/tours" style={{ color: currentTheme.navbarText, textDecoration: 'none' }}>Tours</Link>
          <Link to="/contact" style={{ color: currentTheme.navbarText, textDecoration: 'none' }}>Contact</Link>
          
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              color: currentTheme.navbarText
            }}
            title={`Switch to ${theme === 'default' ? 'light' : theme === 'light' ? 'dark' : 'default'} mode`}
          >
            {getThemeIcon()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 