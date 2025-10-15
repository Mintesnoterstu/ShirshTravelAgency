import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ 
      padding: '5rem 2rem', 
      background: currentTheme.background,
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            color: currentTheme.primary, 
            marginBottom: '1rem' 
          }}>
            Contact Us
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: currentTheme.text, 
            maxWidth: '600px', 
            margin: '0 auto',
            opacity: 0.8
          }}>
            Get in touch with us to plan your perfect Ethiopian adventure
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div style={{
            background: currentTheme.accent,
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '10px',
            marginBottom: '2rem',
            textAlign: 'center',
            animation: 'slideIn 0.5s ease'
          }}>
            ✅ Thank you for your message! We will get back to you within 24 hours.
          </div>
        )}

        {/* Contact Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem', 
          marginTop: '3rem' 
        }}>
          {/* Contact Info */}
          <div style={{
            background: currentTheme.cardBackground,
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: `0 10px 30px ${currentTheme.shadow}`,
            border: `1px solid ${currentTheme.border}`
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: currentTheme.primary, 
              marginBottom: '2rem' 
            }}>
              Get In Touch
            </h3>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              padding: '1rem',
              background: currentTheme.surface,
              borderRadius: '10px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                📞
              </div>
              <div>
                <h4 style={{ 
                  fontSize: '1rem', 
                  color: currentTheme.primary, 
                  margin: '0 0 0.3rem 0' 
                }}>
                  Phone
                </h4>
                <p style={{ 
                  color: currentTheme.text, 
                  margin: 0, 
                  lineHeight: 1.4,
                  opacity: 0.8
                }}>
                  +251 987 950 887
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              padding: '1rem',
              background: currentTheme.surface,
              borderRadius: '10px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                ✉️
              </div>
              <div>
                <h4 style={{ 
                  fontSize: '1rem', 
                  color: currentTheme.primary, 
                  margin: '0 0 0.3rem 0' 
                }}>
                  Email
                </h4>
                <p style={{ 
                  color: currentTheme.text, 
                  margin: 0, 
                  lineHeight: 1.4,
                  opacity: 0.8
                }}>
                  teklemintesnot2gmail.com
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              padding: '1rem',
              background: currentTheme.surface,
              borderRadius: '10px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                📍
              </div>
              <div>
                <h4 style={{ 
                  fontSize: '1rem', 
                  color: currentTheme.primary, 
                  margin: '0 0 0.3rem 0' 
                }}>
                  Address
                </h4>
                <p style={{ 
                  color: currentTheme.text, 
                  margin: 0, 
                  lineHeight: 1.4,
                  opacity: 0.8
                }}>
                  Bole Road, Addis Ababa<br />
                  Ethiopia
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              padding: '1rem',
              background: currentTheme.surface,
              borderRadius: '10px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🕒
              </div>
              <div>
                <h4 style={{ 
                  fontSize: '1rem', 
                  color: currentTheme.primary, 
                  margin: '0 0 0.3rem 0' 
                }}>
                  Business Hours
                </h4>
                <p style={{ 
                  color: currentTheme.text, 
                  margin: 0, 
                  lineHeight: 1.4,
                  opacity: 0.8
                }}>
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: currentTheme.cardBackground,
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: `0 10px 30px ${currentTheme.shadow}`,
            border: `1px solid ${currentTheme.border}`
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: currentTheme.primary, 
              marginBottom: '2rem' 
            }}>
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: currentTheme.primary, 
                  fontWeight: 500 
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${errors.name ? '#dc3545' : currentTheme.border}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    background: currentTheme.background,
                    color: currentTheme.text,
                    transition: 'all 0.3s ease'
                  }}
                />
                {errors.name && (
                  <p style={{ color: '#dc3545', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: currentTheme.primary, 
                  fontWeight: 500 
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${errors.email ? '#dc3545' : currentTheme.border}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    background: currentTheme.background,
                    color: currentTheme.text,
                    transition: 'all 0.3s ease'
                  }}
                />
                {errors.email && (
                  <p style={{ color: '#dc3545', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: currentTheme.primary, 
                  fontWeight: 500 
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${currentTheme.border}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    background: currentTheme.background,
                    color: currentTheme.text,
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: currentTheme.primary, 
                  fontWeight: 500 
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${errors.subject ? '#dc3545' : currentTheme.border}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    background: currentTheme.background,
                    color: currentTheme.text,
                    transition: 'all 0.3s ease'
                  }}
                />
                {errors.subject && (
                  <p style={{ color: '#dc3545', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                    {errors.subject}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: currentTheme.primary, 
                  fontWeight: 500 
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${errors.message ? '#dc3545' : currentTheme.border}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    minHeight: '120px',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    background: currentTheme.background,
                    color: currentTheme.text,
                    transition: 'all 0.3s ease'
                  }}
                />
                {errors.message && (
                  <p style={{ color: '#dc3545', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? currentTheme.border 
                    : `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '25px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 