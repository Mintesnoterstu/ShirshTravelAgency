import React from 'react';
import { Link } from 'react-router-dom';

const HararDetails = () => {
  console.log('HararDetails component is rendering!'); // Debug log
  
  return (
    <div style={{ 
      paddingTop: '100px', 
      background: 'white', 
      minHeight: '100vh',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{ 
        background: 'linear-gradient(135deg, #8B0000, #DC143C)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        marginBottom: '2rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Harar - Africa's Walled Wonder
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where Hyenas Dine with Humans and Alleys Bloom with Color
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B0000', fontSize: '1.8rem', marginBottom: '1rem' }}>A Sensory Carnival</h2>
        <div style={{ 
          background: '#fff5f5', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #8B0000'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Step into <strong>Harar Jugol</strong>, a UNESCO-listed maze of <strong>368 alleyways</strong> packed with:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem' }}>🕌</span>
              <strong>82 mosques</strong> (more than any city in Africa)
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem' }}>🏠</span>
              <strong>Traditional Harari houses</strong> painted like jewel boxes
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem' }}>🦁</span>
              <strong>The world's only urban hyena feeders</strong>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B0000', fontSize: '1.8rem', marginBottom: '1rem' }}>🌙 Must-Experience Moments</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B0000', fontSize: '1.4rem', marginBottom: '1rem' }}>1. Hyena Feeding Ritual</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👨</span>
                <div>
                  Watch the <strong>"Hyena Man"</strong> call wild hyenas by name
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌙</span>
                <div>
                  Dare to <strong>hand-feed them</strong> under moonlight
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B0000', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Old City Exploration</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏘️</span>
                <div>
                  Get lost in <strong>colorful alleys</strong> smelling of coffee and spices
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏠</span>
                <div>
                  Visit <strong>Arthur Rimbaud's house</strong> (the French poet's former home)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🛒</span>
                <div>
                  Bargain at the <strong>basket market</strong> for Harari crafts
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B0000', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Cultural Encounters</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>☕</span>
                <div>
                  Attend a <strong>traditional coffee ceremony</strong> in a Harari home
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🍺</span>
                <div>
                  Taste <strong>Harar beer</strong> (Africa's oldest brewery)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B0000', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🥞</span>
                <div>
                  See <strong>women baking injera</strong> on hundred-year-old stoves
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B0000', fontSize: '1.8rem', marginBottom: '1rem' }}>🕌 Why Harar Stands Apart</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Fourth holiest Islamic city</strong> with unique Sufi traditions
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Photography paradise</strong> of vivid doors and textiles
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Perfect add-on</strong> after Danakil or Bale Mountains
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B0000', fontSize: '1.8rem', marginBottom: '1rem' }}>⚠️ Traveler Notes</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>👗 Dress Modestly</h3>
            <p><strong>Shoulders/knees covered</strong> (respectful for Islamic city)</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🌅 Best Sunsets</h3>
            <p>From <strong>Feres Magala square</strong></p>
          </div>
          <div>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🔗 Combine With</h3>
            <p><strong>Dire Dawa's railway history</strong></p>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #8B0000, #DC143C)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Ready for These Hidden Gems?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Shirsh Travel Agency crafts immersive journeys—whether tracking wolves at dawn or sipping coffee in Harar's courtyards.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your cultural adventure!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: '#8B0000',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '10px',
          textDecoration: 'none',
          display: 'inline-block',
          marginTop: '1rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: 'background 0.3s ease'
        }}>
          Back to Tours
        </Link>
      </div>
    </div>
  );
};

export default HararDetails; 