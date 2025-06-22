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
    numberOfDays: 1,
    specialRequests: '',
    accommodation: 'standard',
    transportation: 'included',
    paymentMethod: 'credit_card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
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

  const calculateTotalPrice = () => {
    if (!bookingData) return 0;
    const basePrice = parseInt(bookingData.price.replace('$', ''));
    return basePrice * formData.numberOfGuests * formData.numberOfDays;
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
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
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
            borderRadius: '20px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 8px 25px ${currentTheme.shadow}`,
            height: 'fit-content',
            position: 'sticky',
            top: '120px'
          }}>
            <h2 style={{ 
              color: currentTheme.primary, 
              fontSize: '1.8rem', 
              marginBottom: '1.5rem',
              textAlign: 'center'
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
                borderRadius: '15px',
                marginBottom: '1.5rem'
              }}
            />
            <h3 style={{ 
              color: currentTheme.primary, 
              fontSize: '1.4rem', 
              marginBottom: '0.5rem',
              textAlign: 'center'
            }}>
              {bookingData.name}
            </h3>
            <p style={{ 
              color: currentTheme.text, 
              marginBottom: '1.5rem',
              opacity: 0.8,
              textAlign: 'center',
              lineHeight: '1.5'
            }}>
              {bookingData.description}
            </p>
            
            {/* Price Breakdown */}
            <div style={{
              background: currentTheme.background,
              padding: '1.5rem',
              borderRadius: '15px',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ 
                color: currentTheme.primary, 
                fontSize: '1.2rem', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Price Breakdown
              </h4>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: currentTheme.text }}>Base Price:</span>
                <span style={{ color: currentTheme.text }}>{bookingData.price} per person</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: currentTheme.text }}>Guests:</span>
                <span style={{ color: currentTheme.text }}>{formData.numberOfGuests}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: currentTheme.text }}>Days:</span>
                <span style={{ color: currentTheme.text }}>{formData.numberOfDays}</span>
              </div>
              <hr style={{ 
                border: 'none', 
                borderTop: `1px solid ${currentTheme.border}`,
                margin: '1rem 0'
              }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ 
                  color: currentTheme.primary, 
                  fontSize: '1.3rem', 
                  fontWeight: 'bold' 
                }}>
                  Total:
                </span>
                <span style={{ 
                  color: currentTheme.accent, 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold' 
                }}>
                  ${calculateTotalPrice()}
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0',
              borderTop: `1px solid ${currentTheme.border}`
            }}>
              <div style={{ 
                color: currentTheme.accent, 
                fontSize: '1rem', 
                fontWeight: '500' 
              }}>
                ⏱️ {bookingData.duration}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div style={{
            background: currentTheme.surface,
            padding: '2rem',
            borderRadius: '20px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 8px 25px ${currentTheme.shadow}`
          }}>
            <h2 style={{ 
              color: currentTheme.primary, 
              fontSize: '1.8rem', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Personal Information
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Personal Information Section */}
              <div style={{
                background: currentTheme.background,
                padding: '1.5rem',
                borderRadius: '15px',
                marginBottom: '2rem'
              }}>
                <h3 style={{ 
                  color: currentTheme.primary, 
                  fontSize: '1.3rem', 
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  👤 Personal Details
                </h3>
                
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
                        borderRadius: '10px',
                        backgroundColor: currentTheme.surface,
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
                        borderRadius: '10px',
                        backgroundColor: currentTheme.surface,
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
                      borderRadius: '10px',
                      backgroundColor: currentTheme.surface,
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
                      borderRadius: '10px',
                      backgroundColor: currentTheme.surface,
                      color: currentTheme.text,
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              {/* Travel Details Section */}
              <div style={{
                background: currentTheme.background,
                padding: '1.5rem',
                borderRadius: '15px',
                marginBottom: '2rem'
              }}>
                <h3 style={{ 
                  color: currentTheme.primary, 
                  fontSize: '1.3rem', 
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  ✈️ Travel Details
                </h3>
                
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
                        borderRadius: '10px',
                        backgroundColor: currentTheme.surface,
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
                        borderRadius: '10px',
                        backgroundColor: currentTheme.surface,
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
                    Number of Days *
                  </label>
                  <select
                    name="numberOfDays"
                    value={formData.numberOfDays}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${currentTheme.border}`,
                      borderRadius: '10px',
                      backgroundColor: currentTheme.surface,
                      color: currentTheme.text,
                      fontSize: '1rem'
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Day' : 'Days'}</option>
                    ))}
                  </select>
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
                      borderRadius: '10px',
                      backgroundColor: currentTheme.surface,
                      color: currentTheme.text,
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              {/* Payment Method Section */}
              <div style={{
                background: currentTheme.background,
                padding: '1.5rem',
                borderRadius: '15px',
                marginBottom: '2rem'
              }}>
                <h3 style={{ 
                  color: currentTheme.primary, 
                  fontSize: '1.3rem', 
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  💳 Payment Method
                </h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    color: currentTheme.text,
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    Payment Method *
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${currentTheme.border}`,
                      borderRadius: '10px',
                      backgroundColor: currentTheme.surface,
                      color: currentTheme.text,
                      fontSize: '1rem'
                    }}
                  >
                    <option value="credit_card">💳 Credit Card</option>
                    <option value="debit_card">💳 Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">🏦 Bank Transfer</option>
                    <option value="cash">💵 Cash on Arrival</option>
                  </select>
                </div>

                {formData.paymentMethod === 'credit_card' || formData.paymentMethod === 'debit_card' ? (
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{
                        display: 'block',
                        color: currentTheme.text,
                        marginBottom: '0.5rem',
                        fontWeight: '500'
                      }}>
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: `1px solid ${currentTheme.border}`,
                          borderRadius: '10px',
                          backgroundColor: currentTheme.surface,
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
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: `1px solid ${currentTheme.border}`,
                            borderRadius: '10px',
                            backgroundColor: currentTheme.surface,
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
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: `1px solid ${currentTheme.border}`,
                            borderRadius: '10px',
                            backgroundColor: currentTheme.surface,
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
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: `1px solid ${currentTheme.border}`,
                          borderRadius: '10px',
                          backgroundColor: currentTheme.surface,
                          color: currentTheme.text,
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  backgroundColor: currentTheme.accent,
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 4px 15px ${currentTheme.shadow}`
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = currentTheme.primary;
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 6px 20px ${currentTheme.shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = currentTheme.accent;
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = `0 4px 15px ${currentTheme.shadow}`;
                }}
              >
                💳 Pay ${calculateTotalPrice()} & Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking; 