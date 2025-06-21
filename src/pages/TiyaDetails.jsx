import React from 'react';
import { Link } from 'react-router-dom';

const TiyaDetails = () => {
  console.log('TiyaDetails component is rendering!'); // Debug log
  
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
        background: 'linear-gradient(135deg, #696969, #808080)', 
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
          Tiya - Ethiopia's Stonehenge
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where Ancient Mysteries Stand in Silent Rows
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#696969', fontSize: '1.8rem', marginBottom: '1rem' }}>A UNESCO Puzzle in Stone</h2>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #696969'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            The <strong>Tiya megaliths</strong> represent Ethiopia's most enigmatic archaeological site - 36 <strong>ancient stelae</strong> covered in mysterious symbols. Dating back to the 12th-14th centuries, these <strong>4-meter-tall stones</strong> feature:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem' }}>🗡️</span>
              <strong>Intricate carvings</strong> of swords and plants
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem' }}>⚰️</span>
              <strong>Underground burial chambers</strong>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem' }}>❓</span>
              <strong>Unknown origins</strong> (possibly a warrior memorial)
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#696969', fontSize: '1.8rem', marginBottom: '1rem' }}>🔍 Unraveling the Secrets</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#696969', fontSize: '1.4rem', marginBottom: '1rem' }}>1. The Northern Stelae Field</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🗡️</span>
                <div>
                  See the <strong>most decorated stones</strong> with sword motifs
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>📏</span>
                <div>
                  Marvel at <strong>perfectly aligned rows</strong> stretching 50 meters
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#696969', fontSize: '1.4rem', marginBottom: '1rem' }}>2. The Archaeological Museum</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏛️</span>
                <div>
                  View <strong>excavated artifacts</strong> from the tombs
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👥</span>
                <div>
                  Learn theories about the <strong>Sidama people</strong> who may have created them
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#696969', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Local Legends</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>⚔️</span>
                <div>
                  Hear tales of <strong>ancient battles</strong> commemorated here
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#696969', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👹</span>
                <div>
                  Learn why locals call it <em>"the place where giants are buried"</em>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#696969', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why History Lovers Must Visit</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>UNESCO World Heritage Site</strong> since 1980
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Less than 2 hours</strong> from Addis Ababa
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Perfect pairing</strong> with Adadi Mariam rock church
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#696969', fontSize: '1.8rem', marginBottom: '1rem' }}>📅 Travel Tips</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>👥 Guides Recommended</h3>
            <p>To decode the symbols and understand the site's significance</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🌅 Early Morning</h3>
            <p>Best for photography and avoiding crowds</p>
          </div>
          <div>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🔗 Combine With</h3>
            <p>Melka Kunture prehistoric site for a full archaeological experience</p>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #696969, #808080)', 
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
          📞 Contact us today to book your archaeological adventure!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: '#696969',
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

export default TiyaDetails; 