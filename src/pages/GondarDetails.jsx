import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const GondarDetails = () => {
  const { currentTheme } = useTheme();
  console.log('GondarDetails component is rendering!'); // Debug log
  
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
          Gondar - Ethiopia's Imperial Citadel
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.89)',
          maxWidth: '800px'
        }}>
          Where Medieval Castles Meet African Majesty
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>A Royal Journey Through Time</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: `4px solid ${currentTheme.primary}`
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: currentTheme.text }}>
            Welcome to <strong>Gondar</strong>, Ethiopia's answer to Camelot—a city where fairy-tale castles rise against the backdrop of the Simien Mountains. Founded in <strong>1636 by Emperor Fasilides</strong>, Gondar served as Ethiopia's imperial capital for over 200 years, blending <strong>African tradition with European and Arab influences</strong>. Today, its UNESCO-listed palaces, ornate churches, and vibrant festivals make it a crown jewel of Ethiopia's Historic Route.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>✨ Top Experiences in Gondar</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>1. Fasil Ghebbi – The Royal Enclosure</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>Africa's Camelot</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              Step into a <strong>17th-century fortress-city</strong> with six majestic castles, including:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏰</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Fasilides' Palace</strong>: The oldest and grandest, with its <strong>turreted towers and banquet halls</strong>.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👑</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Iyasu's Castle</strong>: Famous for its <strong>mirrored throne room</strong> (once lined with ivory and gold).
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎭</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Dawit's Hall</strong>: Where emperors held court beneath <strong>frescoed ceilings</strong>.
                </div>
              </li>
            </ul>
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: currentTheme.text, opacity: 0.8 }}>
              <strong>Hidden Tunnels</strong>: Legend says secret passages connect the palaces—some still unexplored!
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>2. Timkat – The Epiphany Extravaganza</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>Africa's Greatest Festival</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              Every January, Gondar becomes the <strong>epicenter of Timkat</strong>, Ethiopia's Orthodox celebration of Jesus' baptism.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💧</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Sacred Bathing Ritual</strong>: Thousands gather at <strong>Fasilides' Bath</strong> (a massive sunken pool) to renew their faith.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🥁</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Drumming & Dancing</strong>: Priests in brocade robes lead processions with <strong>golden crosses and rainbow umbrellas</strong>.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>3. Debre Berhan Selassie – The Church of Light</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👼</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Ceiling of Angels</strong>: Gaze up at <strong>135 cherubic faces</strong> painted on the wooden beams—Ethiopia's most famous frescoes.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐝</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Survivor's Tale</strong>: The only church spared by <strong>Sudanese invaders</strong> in the 1880s—locals say a <strong>swarm of bees</strong> protected it.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>4. Kuskuam Complex – The Forgotten Palace</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👸</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Empress Mentewab's Retreat</strong>: This <strong>18th-century palace</strong> offers panoramic views and a hauntingly beautiful ruin.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💎</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Hidden Gem</strong>: Few tourists visit, making it perfect for <strong>solitude and sunset photos</strong>.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Gondar Belongs on Your Bucket List</h2>
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
                <strong>UNESCO Wonder</strong> – Africa's only medieval castle complex.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Living History</strong> – Timkat lets you <strong>participate</strong>—not just observe.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Architectural Mashup</strong> – Portuguese, Moorish, and Axumite styles collide.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Photographer's Paradise</strong> – Every angle offers a postcard-worthy shot.
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
            <p style={{ color: currentTheme.text }}>October–March (dry season). January for Timkat festival.</p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>🏛️ Nearby Gems</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: currentTheme.text }}>
              <li><strong>Simien Mountains</strong>: Just 2 hours away for trekking and wildlife.</li>
              <li><strong>Lake Tana</strong>: Source of the Blue Nile and island monasteries.</li>
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
              <p style={{ color: currentTheme.text }}>Royal Enclosure, Debre Berhan Selassie</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>3 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Add Kuskuam, Fasilides' Bath, local markets</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>7 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Combine with Simien Mountains & Lalibela</p>
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
        <h2 style={{ marginBottom: '1rem' }}>🏰 Ready to Walk Through Royal History?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Let Shirsh Travel Agency guide you through Gondar's imperial splendor.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your royal adventure!
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

export default GondarDetails; 