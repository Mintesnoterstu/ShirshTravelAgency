import React from 'react';
import { Link } from 'react-router-dom';

const GondarDetails = () => {
  console.log('GondarDetails component is rendering!'); // Debug log
  
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
        background: 'linear-gradient(135deg, #8B4513, #CD853F)', 
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
          Gondar - Ethiopia's Imperial Citadel
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where Medieval Castles Meet African Majesty
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>A Royal Journey Through Time</h2>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #8B4513'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Welcome to <strong>Gondar</strong>, Ethiopia's answer to Camelot—a city where fairy-tale castles rise against the backdrop of the Simien Mountains. Founded in <strong>1636 by Emperor Fasilides</strong>, Gondar served as Ethiopia's imperial capital for over 200 years, blending <strong>African tradition with European and Arab influences</strong>. Today, its UNESCO-listed palaces, ornate churches, and vibrant festivals make it a crown jewel of Ethiopia's Historic Route.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>✨ Top Experiences in Gondar</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>1. Fasil Ghebbi – The Royal Enclosure</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: '#8B4513' }}>Africa's Camelot</p>
            <p style={{ marginBottom: '1rem' }}>
              Step into a <strong>17th-century fortress-city</strong> with six majestic castles, including:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏰</span>
                <div>
                  <strong>Fasilides' Palace</strong>: The oldest and grandest, with its <strong>turreted towers and banquet halls</strong>.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👑</span>
                <div>
                  <strong>Iyasu's Castle</strong>: Famous for its <strong>mirrored throne room</strong> (once lined with ivory and gold).
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎭</span>
                <div>
                  <strong>Dawit's Hall</strong>: Where emperors held court beneath <strong>frescoed ceilings</strong>.
                </div>
              </li>
            </ul>
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
              <strong>Hidden Tunnels</strong>: Legend says secret passages connect the palaces—some still unexplored!
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Timkat – The Epiphany Extravaganza</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: '#8B4513' }}>Africa's Greatest Festival</p>
            <p style={{ marginBottom: '1rem' }}>
              Every January, Gondar becomes the <strong>epicenter of Timkat</strong>, Ethiopia's Orthodox celebration of Jesus' baptism.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💧</span>
                <div>
                  <strong>Sacred Bathing Ritual</strong>: Thousands gather at <strong>Fasilides' Bath</strong> (a massive sunken pool) to renew their faith.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🥁</span>
                <div>
                  <strong>Drumming & Dancing</strong>: Priests in brocade robes lead processions with <strong>golden crosses and rainbow umbrellas</strong>.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Debre Berhan Selassie – The Church of Light</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👼</span>
                <div>
                  <strong>Ceiling of Angels</strong>: Gaze up at <strong>135 cherubic faces</strong> painted on the wooden beams—Ethiopia's most famous frescoes.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐝</span>
                <div>
                  <strong>Survivor's Tale</strong>: The only church spared by <strong>Sudanese invaders</strong> in the 1880s—locals say a <strong>swarm of bees</strong> protected it.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>4. Kuskuam Complex – The Forgotten Palace</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👸</span>
                <div>
                  <strong>Empress Mentewab's Retreat</strong>: This <strong>18th-century palace</strong> offers panoramic views and a hauntingly beautiful ruin.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💎</span>
                <div>
                  <strong>Hidden Gem</strong>: Few tourists visit, making it perfect for <strong>solitude and sunset photos</strong>.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Gondar Belongs on Your Bucket List</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>UNESCO Wonder</strong> – Africa's only medieval castle complex.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Living History</strong> – Timkat lets you <strong>participate</strong>—not just observe.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Architectural Mashup</strong> – Portuguese, Moorish, and Axumite styles collide.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Gateway to Adventure</strong> – Pair with <strong>Simien Mountains treks</strong> or <strong>Lalibela's churches</strong>.
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>📅 Practical Travel Tips</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🌤️ Best Time to Visit</h3>
            <p><strong>October–March</strong> (cool weather; Timkat is January 19–20).</p>
          </div>
          <div>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🏪 Don't Miss</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Local Markets</strong>: Spice stalls and <strong>handwoven cotton</strong> near Piassa Square.</li>
              <li><strong>Coffee Ceremonies</strong>: Gondar is famed for its <strong>strong, spicy brews</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>🗺️ Suggested Itineraries</h2>
        <div style={{ 
          background: '#fff', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#8B4513', marginBottom: '0.5rem' }}><strong>1 Day</strong></h4>
              <p>Royal Enclosure + Debre Berhan Selassie</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#8B4513', marginBottom: '0.5rem' }}><strong>3 Days</strong></h4>
              <p>Add Kuskuam, Timkat (if timed right), and a Simien day trip</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#8B4513', marginBottom: '0.5rem' }}><strong>7 Days</strong></h4>
              <p>Combine with Lalibela & Bahir Dar</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #8B4513, #CD853F)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Ready to Rule Like an Emperor?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Let Shirsh Travel Agency design your royal Gondar adventure—where history isn't just seen, but felt.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your imperial journey!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: '#8B4513',
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

export default GondarDetails; 