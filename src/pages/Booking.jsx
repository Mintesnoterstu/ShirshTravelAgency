import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Booking = () => {
  const { currentTheme } = useTheme();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const savedBookingData = sessionStorage.getItem('bookingData');
    if (savedBookingData) {
      setBookingData(JSON.parse(savedBookingData));
    } else {
      navigate('/tours');
    }
  }, [navigate]);

  if (!bookingData) {
    return (
      <div style={{ 
        paddingTop: '100px', 
        background: currentTheme.background, 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: currentTheme.primary }}>Loading booking details...</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      paddingTop: '100px', 
      background: currentTheme.background, 
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/tours" style={{
            color: currentTheme.primary,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: '1rem',
            fontSize: '1rem'
          }}>
            ← Back to Tours
          </Link>
          <h1 style={{ 
            color: currentTheme.primary, 
            fontSize: '2.5rem', 
            marginBottom: '0.5rem' 
          }}>
            Book Your Tour
          </h1>
          <p style={{ 
            color: currentTheme.text, 
            fontSize: '1.1rem',
            opacity: 0.8
          }}>
            Complete your booking for {bookingData.name}
          </p>
        </div>

        <div style={{
          background: currentTheme.surface,
          padding: '2rem',
          borderRadius: '15px',
          border: `1px solid ${currentTheme.border}`,
          boxShadow: `0 4px 15px ${currentTheme.shadow}`
        }}>
          <h2 style={{ 
            color: currentTheme.primary, 
            fontSize: '1.8rem', 
            marginBottom: '1.5rem' 
          }}>
            Booking Form Coming Soon
          </h2>
          <p style={{ color: currentTheme.text }}>
            This is a placeholder for the comprehensive booking form. The form will include:
          </p>
          <ul style={{ color: currentTheme.text, paddingLeft: '2rem' }}>
            <li>Personal Information (Name, Email, Phone)</li>
            <li>Travel Details (Date, Number of Guests)</li>
            <li>Special Requests</li>
            <li>Payment Information</li>
            <li>Tour Summary and Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Booking; 