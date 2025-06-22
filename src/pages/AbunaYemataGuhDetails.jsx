import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const AbunaYemataGuhDetails = () => {
  const { currentTheme } = useTheme();
  console.log('AbunaYemataGuhDetails component is rendering!'); // Debug log
  
  return (
    <div style={{ 
      paddingTop: '100px', 
      background: currentTheme.background, 
      minHeight: '100vh',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ 
        background: `linear-gradient(rgba(139, 69, 19, 0.5), rgba(205, 133, 63, 0.5)), url('https://media.gettyimages.com/id/1225374767/photo/orthodox-priest-at-abuna-yemata-guh-church-aerial-view-tigray-ethiopia.jpg?s=2048x2048&w=gi&k=20&c=8IYDSPGZu7qdGpPH9wn7VUZriiHyjggPEDJyXqHkYeI=')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white', 
        padding: '3rem 2rem', 
        borderRadius: '15px',
        marginBottom: '2rem',
        boxShadow: `0 4px 15px ${currentTheme.shadow}`,
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.89)'
        }}>
          Abuna Yemata Guh - The Cliff Church
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.89)',
          maxWidth: '800px'
        }}>
          Where Faith Defies Gravity
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>A Church in the Sky</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: `4px solid ${currentTheme.primary}`
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: currentTheme.text }}>
            Welcome to <strong>Abuna Yemata Guh</strong>, one of Ethiopia's most extraordinary rock-hewn churches. Perched <strong>2,580 meters above sea level</strong> on a sheer cliff face in the Tigray region, this church represents the pinnacle of human determination and spiritual devotion. Carved directly into the sandstone rock in the <strong>6th century</strong>, Abuna Yemata Guh is accessible only by a <strong>challenging climb</strong> that includes narrow ledges and a final ascent up a vertical rock face. The reward for this daring journey is a church adorned with <strong>stunning frescoes</strong> and a spiritual atmosphere that has remained unchanged for over 1,500 years.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>✨ The Journey to Abuna Yemata Guh</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>1. The Climb - A Test of Faith</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>Vertical Adventure</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              The journey to Abuna Yemata Guh is not for the faint-hearted:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏔️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>2-Hour Ascent</strong>: Begin with a <strong>steep mountain trail</strong> through the Tigray highlands.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🦶</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Narrow Ledges</strong>: Navigate <strong>foot-wide paths</strong> carved into the cliff face.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🧗</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Final Climb</strong>: Scale a <strong>vertical rock face</strong> using hand and foot holds.
                </div>
              </li>
            </ul>
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: currentTheme.text, opacity: 0.8 }}>
              <strong>Local Guides</strong>: Experienced guides ensure your safety throughout the journey.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>2. The Church - A Masterpiece in Stone</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>Architectural Wonder</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              The church itself is a marvel of ancient engineering:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>⛪</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Rock-Hewn Design</strong>: Entirely carved from <strong>living rock</strong>, with no external walls.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎨</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Ancient Frescoes</strong>: Vibrant <strong>6th-century paintings</strong> depicting biblical scenes.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>📜</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Religious Artifacts</strong>: Ancient <strong>manuscripts and crosses</strong> preserved for centuries.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>3. The Spiritual Experience</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🙏</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Prayer Services</strong>: Witness <strong>traditional Orthodox services</strong> in this ancient setting.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌅</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Panoramic Views</strong>: Marvel at <strong>360-degree vistas</strong> of the Tigray landscape.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>☕</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Coffee Ceremony</strong>: Share in the <strong>traditional Ethiopian coffee ritual</strong> with local priests.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Abuna Yemata Guh Belongs on Your Bucket List</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: `1px solid ${currentTheme.accent}`
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Unique Experience</strong> – One of the most challenging church visits in the world.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Ancient Art</strong> – Pristine 6th-century frescoes in their original setting.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Adventure</strong> – Combine spiritual pilgrimage with physical challenge.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Cultural Insight</strong> – Deep understanding of Ethiopian Orthodox traditions.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>📅 Best Time to Visit</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: `1px solid ${currentTheme.accent}`
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>🌤️ Optimal Season</h3>
            <p style={{ color: currentTheme.text }}>October–March (dry season). Avoid rainy season for safety.</p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>⚠️ Safety Considerations</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: currentTheme.text }}>
              <li><strong>Fitness Required</strong>: Good physical condition and no fear of heights.</li>
              <li><strong>Weather Dependent</strong>: Climbing is not possible during rain or strong winds.</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🗺️ Suggested Itineraries</h2>
        <div style={{ 
          background: currentTheme.cardBackground, 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: `1px solid ${currentTheme.border}`,
          boxShadow: `0 2px 8px ${currentTheme.shadow}`
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>1 Day</strong></h4>
              <p style={{ color: currentTheme.text }}>Abuna Yemata Guh climb and visit</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>2 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Add other Tigray rock churches</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>3 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Complete Tigray cultural experience</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`, 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>⛪ Ready to Climb to the Church in the Sky?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Let Shirsh Travel Agency guide you on this extraordinary spiritual and physical journey.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your cliff church adventure!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: currentTheme.primary,
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '10px',
          textDecoration: 'none',
          display: 'inline-block',
          marginTop: '1rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}>
          Back to Tours
        </Link>
      </div>
    </div>
  );
};

export default AbunaYemataGuhDetails; 