import React from 'react';
import { Link } from 'react-router-dom';

const BlueNileFallsDetails = () => {
  console.log('BlueNileFallsDetails component is rendering!'); // Debug log
  
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
        background: 'linear-gradient(135deg, #0066CC, #0099FF)', 
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
          Blue Nile Falls - Ethiopia's Smoking Water
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where the Mighty Nile Begins Its Journey
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#0066CC', fontSize: '1.8rem', marginBottom: '1rem' }}>The Thundering Heart of Ethiopia</h2>
        <div style={{ 
          background: '#f0f8ff', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #0066CC'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Witness the awe-inspiring <strong>Blue Nile Falls</strong>, known locally as <em>Tis Abay</em> ("Great Smoke"). This <strong>400-meter-wide cascade</strong> marks where the Blue Nile begins its epic 1,450km journey to Sudan. During peak season (June-September), the falls transform into one of Africa's most powerful waterfalls, creating:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem' }}>🌈</span>
              <strong>A permanent rainbow</strong> in the mist
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem' }}>🔊</span>
              <strong>Deafening roar</strong> heard kilometers away
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem' }}>💨</span>
              <strong>Legendary "smoke" plume</strong> visible from space
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#0066CC', fontSize: '1.8rem', marginBottom: '1rem' }}>✨ Top Experiences at the Falls</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#0066CC', fontSize: '1.4rem', marginBottom: '1rem' }}>1. The Classic Viewpoint</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌉</span>
                <div>
                  Cross the <strong>17th-century Portuguese Bridge</strong> (still used by locals)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👁️</span>
                <div>
                  Feel the spray at <strong>main observation platforms</strong>
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>📸</span>
                <div>
                  Photograph the <strong>tiered cascades</strong> at golden hour
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#0066CC', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Hidden Perspectives</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🚣</span>
                <div>
                  Take the <strong>local boat</strong> to secret viewpoints
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🥾</span>
                <div>
                  Hike down to the <strong>base pool</strong> (swimming prohibited but breathtaking)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💧</span>
                <div>
                  Visit the <strong>smaller "Tis Issat" falls</strong> upstream
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#0066CC', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Cultural Connections</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏭</span>
                <div>
                  Meet <strong>traditional millers</strong> grinding teff at water-powered mills
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👑</span>
                <div>
                  Hear legends of <strong>Emperor Fasilidas' hidden gold</strong> beneath the falls
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#0066CC', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐒</span>
                <div>
                  Spot <strong>colobus monkeys</strong> in nearby forests
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#0066CC', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why This Beats Other Waterfalls</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Historical significance</strong> - Source of Egypt's civilization
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Accessible adventure</strong> - Easy day trip from Bahir Dar
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Year-round appeal</strong> - While smaller in dry season, the gorge remains spectacular
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#0066CC', fontSize: '1.8rem', marginBottom: '1rem' }}>📅 Best Time to Visit</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🌧️ June-September</h3>
            <p><strong>Full power</strong> (but muddy trails)</p>
          </div>
          <div>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>☀️ October-May</h3>
            <p><strong>Easier hiking</strong>, clearer skies</p>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #0066CC, #0099FF)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Ready for Ancient Wonders?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Shirsh Travel Agency brings these hidden gems to life - whether feeling the Nile's power or touching 800-year-old mysteries.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your waterfall adventure!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: '#0066CC',
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

export default BlueNileFallsDetails; 