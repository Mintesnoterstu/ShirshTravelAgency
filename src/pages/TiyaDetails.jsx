import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const TiyaDetails = () => {
  const { currentTheme } = useTheme();
  console.log('TiyaDetails component is rendering!'); // Debug log
  
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
        background: `linear-gradient(rgba(139, 69, 19, 0.5), rgba(205, 133, 63, 0.5)), url('https://as1.ftcdn.net/v2/jpg/04/81/01/08/1000_F_481010899_hDF8kx3A0TY0alVcbtSszeA8T5msbgaN.jpg')`,
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
          Tiya - Ethiopia's Mysterious Stelae Field
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.89)',
          maxWidth: '800px'
        }}>
          Where Ancient Stones Tell Stories of the Past
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>Unraveling the Mystery of the Stelae</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: `4px solid ${currentTheme.primary}`
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: currentTheme.text }}>
            Welcome to <strong>Tiya</strong>, a UNESCO World Heritage Site that holds one of Ethiopia's most enigmatic archaeological treasures. This ancient burial site features <strong>36 mysterious stelae</strong> (standing stones) dating back to the <strong>12th-14th centuries</strong>. Carved with intricate symbols and figures, these stones stand as silent witnesses to a sophisticated civilization that once thrived in this region. The site offers visitors a unique opportunity to connect with Ethiopia's pre-Christian past and ponder the mysteries of ancient African cultures.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>✨ The Enigmatic Stelae of Tiya</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>1. The Standing Stones</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>Ancient Monuments</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              Explore the <strong>36 stelae</strong> that make up this mysterious archaeological site:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🗿</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Phallic Stelae</strong>: Tall, cylindrical stones representing <strong>masculine power and fertility</strong>.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>⚔️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Warrior Symbols</strong>: Carvings of <strong>swords, daggers, and shields</strong> indicating military prowess.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👤</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Human Figures</strong>: Representations of <strong>deceased warriors and leaders</strong>.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>2. Archaeological Significance</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>Cultural Heritage</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              The stelae provide valuable insights into <strong>pre-Christian Ethiopian society</strong>:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏺</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Burial Practices</strong>: Evidence of <strong>elaborate funeral ceremonies</strong> and ancestor worship.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🔍</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Social Structure</strong>: Indications of a <strong>hierarchical society</strong> with warrior elites.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎨</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Artistic Traditions</strong>: Sophisticated <strong>stone carving techniques</strong> and symbolic language.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>3. The Mystery of the Symbols</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>❓</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Undeciphered Script</strong>: Many symbols remain <strong>unexplained</strong>, adding to the site's mystery.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌍</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Cultural Connections</strong>: Similar stelae found in <strong>other parts of Africa</strong> suggest trade networks.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>📚</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Ongoing Research</strong>: Archaeologists continue to <strong>study and interpret</strong> the site's significance.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Tiya Belongs on Your Bucket List</h2>
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
                <strong>UNESCO World Heritage Site</strong> – Recognized for its outstanding universal value.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Archaeological Mystery</strong> – One of Ethiopia's most enigmatic ancient sites.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Cultural Insight</strong> – Window into pre-Christian Ethiopian civilization.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Peaceful Setting</strong> – Quiet, contemplative atmosphere perfect for reflection.
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
            <p style={{ color: currentTheme.text }}>October–March (dry season). Avoid heavy rains in July–August.</p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>⏰ Best Time of Day</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: currentTheme.text }}>
              <li><strong>Early Morning</strong>: Cool temperatures and soft lighting for photography.</li>
              <li><strong>Late Afternoon</strong>: Golden hour light enhances the stelae's appearance.</li>
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
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>Half Day</strong></h4>
              <p style={{ color: currentTheme.text }}>Tiya stelae exploration and interpretation</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>1 Day</strong></h4>
              <p style={{ color: currentTheme.text }}>Add nearby archaeological sites and local village visit</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>2 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Combine with Addis Ababa museums and cultural sites</p>
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
        <h2 style={{ marginBottom: '1rem' }}>🗿 Ready to Unlock the Secrets of the Ancient Stelae?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Let Shirsh Travel Agency guide you through Ethiopia's most mysterious archaeological site.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your archaeological adventure!
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

export default TiyaDetails; 