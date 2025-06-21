import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'default';
  });

  const themes = {
    light: {
      name: 'light',
      background: '#ffffff',
      text: '#333333',
      primary: '#1e3c72',
      secondary: '#2a5298',
      accent: '#28a745',
      surface: '#f8f9fa',
      border: '#e9ecef',
      shadow: 'rgba(0, 0, 0, 0.1)',
      cardBackground: '#ffffff',
      navbarBackground: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      navbarText: '#ffffff',
      footerBackground: '#f8f9fa',
      footerText: '#333333'
    },
    dark: {
      name: 'dark',
      background: '#1a1a1a',
      text: '#ffffff',
      primary: '#4a90e2',
      secondary: '#357abd',
      accent: '#50c878',
      surface: '#2d2d2d',
      border: '#404040',
      shadow: 'rgba(0, 0, 0, 0.3)',
      cardBackground: '#2d2d2d',
      navbarBackground: 'linear-gradient(135deg, #2d2d2d 0%, #404040 100%)',
      navbarText: '#ffffff',
      footerBackground: '#2d2d2d',
      footerText: '#ffffff'
    },
    default: {
      name: 'default',
      background: '#ffffff',
      text: '#333333',
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#28a745',
      surface: '#f8f9fa',
      border: '#e9ecef',
      shadow: 'rgba(0, 0, 0, 0.1)',
      cardBackground: '#ffffff',
      navbarBackground: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      navbarText: '#ffffff',
      footerBackground: '#f8f9fa',
      footerText: '#333333'
    }
  };

  const toggleTheme = () => {
    const themeOrder = ['default', 'light', 'dark'];
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    const newTheme = themeOrder[nextIndex];
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = {
    theme,
    themes,
    currentTheme: themes[theme],
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 