import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const BaleMountainsDetails = () => {
  const { currentTheme } = useTheme();
  console.log('BaleMountainsDetails component is rendering!'); // Debug log
  
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
        background: `linear-gradient(rgba(30,60,114,0.5), rgba(42,82,152,0.5)), url('https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_1950133336.jpg')`,
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
          Bale Mountains - Ethiopia's Highland Paradise
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.89)',
          maxWidth: '800px'
        }}>
          Where Rare Wildlife Roams the Afro-Alpine Meadows
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>An Ecological Wonderland</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: `4px solid ${currentTheme.primary}`
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem', color: currentTheme.text }}>
            Hidden in Ethiopia's southeast, the <strong>Bale Mountains National Park</strong> is a world of extremes—from <strong>alpine meadows</strong> to <strong>dense rainforests</strong>, all above 3,000m. This UNESCO Biosphere Reserve shelters:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem' }}>🦁</span>
              <div style={{ color: currentTheme.text }}>
                <strong>More than 60 mammal species</strong>
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem' }}>🦅</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Over 300 bird species</strong> (including 16 endemics)
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem' }}>🏔️</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Africa's largest alpine ecosystem</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🌿 Must-See Marvels</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>1. Sanetti Plateau</h3>
          <div style={{ 
            background: currentTheme.surface, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🛣️</span>
                <div style={{ color: currentTheme.text }}>
                  Walk across <strong>Africa's highest paved road</strong> (4,000m)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐺</span>
                <div style={{ color: currentTheme.text }}>
                  Spot the <strong>endangered Ethiopian wolf</strong> (only 500 remain)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌱</span>
                <div style={{ color: currentTheme.text }}>
                  See <strong>giant lobelia plants</strong> straight from a Dr. Seuss book
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>2. Harenna Forest</h3>
          <div style={{ 
            background: currentTheme.surface, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌲</span>
                <div style={{ color: currentTheme.text }}>
                  Trek through <strong>cloud forests</strong> dripping with moss
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💧</span>
                <div style={{ color: currentTheme.text }}>
                  Discover <strong>hidden waterfalls</strong> and coffee-growing villages
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐒</span>
                <div style={{ color: currentTheme.text }}>
                  Listen for <strong>colobus monkeys</strong> in the canopy
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>3. Dinsho Wildlife Sanctuary</h3>
          <div style={{ 
            background: currentTheme.surface, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🦌</span>
                <div style={{ color: currentTheme.text }}>
                  See <strong>mountain nyala</strong> (found only here)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐒</span>
                <div style={{ color: currentTheme.text }}>
                  Spot <strong>Bale monkeys</strong> at dawn
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏢</span>
                <div style={{ color: currentTheme.text }}>
                  Visit <strong>park headquarters</strong> for conservation insights
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🐺 Unique Wildlife Encounters</h2>
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
                <strong>Ethiopian wolf tracking</strong> with researchers
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Birdwatching</strong> for rare species like the blue-winged goose
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Night drives</strong> to spot serval cats and genets
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Visit Bale Over Other Parks?</h2>
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
                <strong>Fewer tourists</strong> than Simien Mountains
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Year-round access</strong> (no rainy season closures)
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Diverse landscapes</strong> in one compact area
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>📅 Practical Tips</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: `1px solid ${currentTheme.accent}`
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>🌤️ Best Time</h3>
            <p style={{ color: currentTheme.text }}><strong>November-March</strong> (dry season)</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>🏘️ Base Town</h3>
            <p style={{ color: currentTheme.text }}><strong>Goba</strong> (basic but charming)</p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>🧥 Must-Pack</h3>
            <p style={{ color: currentTheme.text }}><strong>Warm layers</strong> (nights drop below freezing)</p>
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

export default BaleMountainsDetails; 