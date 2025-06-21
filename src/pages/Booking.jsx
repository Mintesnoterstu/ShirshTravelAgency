import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Booking = () => {
  const { currentTheme } = useTheme();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: '',
    numberOfGuests: 1,
    specialRequests: '',
    accommodation: 'standard',
    transportation: 'included'
  });

  useEffect(() => {
    const savedBookingData = sessionStorage.getItem('bookingData');
    if (savedBookingData) {
      setBookingData(JSON.parse(savedBookingData));
    } else {
      navigate('/tours');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    alert('Booking submitted successfully! We will contact you soon to confirm your reservation.');
    sessionStorage.removeItem('bookingData');
    navigate('/tours');
  };

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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* Tour Summary */}
          <div style={{
            background: currentTheme.surface,
            padding: '2rem',
            borderRadius: '15px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 4px 15px ${currentTheme.shadow}`,
            height: 'fit-content'
          }}>
            <h2 style={{ 
              color: currentTheme.primary, 
              fontSize: '1.8rem', 
              marginBottom: '1.5rem' 
            }}>
              Tour Summary
            </h2>
            <img 
              src={bookingData.image} 
              alt={bookingData.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ 
              color: currentTheme.primary, 
              fontSize: '1.3rem', 
              marginBottom: '0.5rem' 
            }}>
              {bookingData.name}
            </h3>
            <p style={{ 
              color: currentTheme.text, 
              marginBottom: '1rem',
              opacity: 0.8
            }}>
              {bookingData.description}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0',
              borderTop: `1px solid ${currentTheme.border}`
            }}>
              <div>
                <span style={{ 
                  color: currentTheme.primary, 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold' 
                }}>
                  {bookingData.price}
                </span>
                <span style={{ 
                  color: currentTheme.text, 
                  fontSize: '0.9rem', 
                  opacity: 0.7,
                  marginLeft: '0.5rem'
                }}>
                  per person
                </span>
              </div>
              <div style={{ 
                color: currentTheme.accent, 
                fontSize: '1rem', 
                fontWeight: '500' 
              }}>
                {bookingData.duration}
              </div>
            </div>
          </div>

          {/* Booking Form */}
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
              Personal Information
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: currentTheme.text,
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${currentTheme.border}`,
                      borderRadius: '8px',
                      backgroundColor: currentTheme.background,
                      color: currentTheme.text,
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    color: currentTheme.text,
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${currentTheme.border}`,
                      borderRadius: '8px',
                      backgroundColor: currentTheme.background,
                      color: currentTheme.text,
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  color: currentTheme.text,
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: `1px solid ${currentTheme.border}`,
                    borderRadius: '8px',
                    backgroundColor: currentTheme.background,
                    color: currentTheme.text,
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  color: currentTheme.text,
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: `1px solid ${currentTheme.border}`,
                    borderRadius: '8px',
                    backgroundColor: currentTheme.background,
                    color: currentTheme.text,
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: currentTheme.text,
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${currentTheme.border}`,
                      borderRadius: '8px',
                      backgroundColor: currentTheme.background,
                      color: currentTheme.text,
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    color: currentTheme.text,
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    Number of Guests *
                  </label>
                  <select
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${currentTheme.border}`,
                      borderRadius: '8px',
                      backgroundColor: currentTheme.background,
                      color: currentTheme.text,
                      fontSize: '1rem'
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  color: currentTheme.text,
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Any special requirements or requests..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: `1px solid ${currentTheme.border}`,
                    borderRadius: '8px',
                    backgroundColor: currentTheme.background,
                    color: currentTheme.text,
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: currentTheme.accent,
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = currentTheme.primary;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = currentTheme.accent;
                }}
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking; 