import React from 'react';
import { Link } from 'react-router-dom';

const BaleMountainsDetails = () => {
  console.log('BaleMountainsDetails component is rendering!'); // Debug log
  
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
        background: 'linear-gradient(135deg, #228B22, #32CD32)', 
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
          Bale Mountains - Ethiopia's Secret Wilderness
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where Wolves Roam and Cloud Forests Whisper
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>An Ecological Wonderland</h2>
        <div style={{ 
          background: '#f0fff0', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #228B22'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Hidden in Ethiopia's southeast, the <strong>Bale Mountains National Park</strong> is a world of extremes—from <strong>alpine meadows</strong> to <strong>dense rainforests</strong>, all above 3,000m. This UNESCO Biosphere Reserve shelters:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem' }}>🦁</span>
              <strong>More than 60 mammal species</strong>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem' }}>🦅</span>
              <strong>Over 300 bird species</strong> (including 16 endemics)
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem' }}>🏔️</span>
              <strong>Africa's largest alpine ecosystem</strong>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>🌿 Must-See Marvels</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#228B22', fontSize: '1.4rem', marginBottom: '1rem' }}>1. Sanetti Plateau</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🛣️</span>
                <div>
                  Walk across <strong>Africa's highest paved road</strong> (4,000m)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐺</span>
                <div>
                  Spot the <strong>endangered Ethiopian wolf</strong> (only 500 remain)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌱</span>
                <div>
                  See <strong>giant lobelia plants</strong> straight from a Dr. Seuss book
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#228B22', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Harenna Forest</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌲</span>
                <div>
                  Trek through <strong>cloud forests</strong> dripping with moss
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💧</span>
                <div>
                  Discover <strong>hidden waterfalls</strong> and coffee-growing villages
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐒</span>
                <div>
                  Listen for <strong>colobus monkeys</strong> in the canopy
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#228B22', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Dinsho Wildlife Sanctuary</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🦌</span>
                <div>
                  See <strong>mountain nyala</strong> (found only here)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐒</span>
                <div>
                  Spot <strong>Bale monkeys</strong> at dawn
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏢</span>
                <div>
                  Visit <strong>park headquarters</strong> for conservation insights
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>🐺 Unique Wildlife Encounters</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Ethiopian wolf tracking</strong> with researchers
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Birdwatching</strong> for rare species like the blue-winged goose
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Night drives</strong> to spot serval cats and genets
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Visit Bale Over Other Parks?</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#856404', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Fewer tourists</strong> than Simien Mountains
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#856404', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Year-round access</strong> (no rainy season closures)
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#856404', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Diverse landscapes</strong> in one compact area
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>📅 Practical Tips</h2>
        <div style={{ 
          background: '#f8d7da', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #dc3545'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#721c24', marginBottom: '0.5rem' }}>🌤️ Best Time</h3>
            <p><strong>November-March</strong> (dry season)</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#721c24', marginBottom: '0.5rem' }}>🏘️ Base Town</h3>
            <p><strong>Goba</strong> (basic but charming)</p>
          </div>
          <div>
            <h3 style={{ color: '#721c24', marginBottom: '0.5rem' }}>🧥 Must-Pack</h3>
            <p><strong>Warm layers</strong> (nights drop below freezing)</p>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #228B22, #32CD32)', 
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
          📞 Contact us today to book your wilderness adventure!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: '#228B22',
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

export default BaleMountainsDetails; 