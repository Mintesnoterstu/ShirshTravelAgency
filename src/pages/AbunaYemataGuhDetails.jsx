import React from 'react';
import { Link } from 'react-router-dom';

const AbunaYemataGuhDetails = () => {
  console.log('AbunaYemataGuhDetails component is rendering!'); // Debug log
  
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
          Abuna Yemata Guh - The Cliffside Miracle
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where Faith Defies Gravity
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>The World's Most Inaccessible Church</h2>
        <div style={{ 
          background: '#fff5f5', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #8B4513'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Carved into a <strong>sheer 300-meter cliff</strong> in Tigray's Gheralta Mountains, the 5th-century <strong>Abuna Yemata Guh</strong> offers:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem' }}>🎨</span>
              <strong>Breathtaking frescoes</strong> untouched by time
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem' }}>💓</span>
              <strong>A heart-pounding ascent</strong> (no safety ropes)
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem' }}>🙏</span>
              <strong>Spiritual rewards</strong> beyond imagination
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>✝️ The Pilgrim's Journey</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>1. The Ascent</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>⏱️</span>
                <div>
                  <strong>1.5-hour climb</strong> using hand-carved footholds
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🧗</span>
                <div>
                  <strong>Final 10-meter vertical stretch</strong> requiring barefoot climbing
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👥</span>
                <div>
                  <strong>Local guides</strong> who've made the trip thousands of times
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>2. The Church Interior</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎨</span>
                <div>
                  <strong>Dome frescoes</strong> of the Nine Saints and 12 Apostles
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>📜</span>
                <div>
                  <strong>Ancient manuscripts</strong> sealed in leather pouches
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎵</span>
                <div>
                  <strong>Perfect acoustics</strong> for liturgical chanting
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>3. The View</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👁️</span>
                <div>
                  <strong>Panorama</strong> across Tigray's sandstone formations
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌅</span>
                <div>
                  <strong>Sunrise services</strong> with light streaming through the entrance
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why This Challenges and Inspires</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Considered one of Christianity's most sacred sites</strong>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Frescoes rivaling Europe's finest medieval art</strong>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Life-changing accomplishment</strong> for those who complete the climb
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>⚠️ Essential Information</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>💪 Physical Requirement</h3>
            <p><strong>Moderate fitness level</strong> needed</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🌤️ Best Time</h3>
            <p><strong>October-February</strong> (cooler temperatures)</p>
          </div>
          <div>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>👗 Dress Code</h3>
            <p><strong>Shoulders/knees covered</strong> (scarves provided)</p>
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
        <h2 style={{ marginBottom: '1rem' }}>🚀 Ready to Experience These Wonders?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Shirsh Travel Agency specializes in seamless museum visits and spiritually significant adventures—from Addis Ababa's halls to Tigray's cliffs.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your spiritual adventure!
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

export default AbunaYemataGuhDetails; 