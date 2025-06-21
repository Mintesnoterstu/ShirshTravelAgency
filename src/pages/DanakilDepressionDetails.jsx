import React from 'react';
import { Link } from 'react-router-dom';

const DanakilDepressionDetails = () => {
  console.log('DanakilDepressionDetails component is rendering!'); // Debug log
  
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
        background: 'linear-gradient(135deg, #FF4500, #FF6347)', 
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
          Danakil Depression - Journey to the Gates of Hell
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where Fire, Salt, and Sulfur Create Earth's Most Alien Landscape
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#FF4500', fontSize: '1.8rem', marginBottom: '1rem' }}>A Geological Wonderland</h2>
        <div style={{ 
          background: '#fff5f5', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #FF4500'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Venture into one of the most extreme environments on Earth - the <strong>Danakil Depression</strong>, a vast volcanic plain where temperatures soar to <strong>50°C (122°F)</strong> and the ground bubbles with toxic gases. This UNESCO-listed site is:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem' }}>🔥</span>
              The <strong>hottest place</strong> on Earth (average annual temperature)
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem' }}>⬇️</span>
              One of the <strong>lowest points</strong> on land (125m below sea level)
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem' }}>🌋</span>
              Home to <strong>30% of Africa's active volcanoes</strong>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#FF4500', fontSize: '1.8rem', marginBottom: '1rem' }}>🔥 Must-See Marvels</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#FF4500', fontSize: '1.4rem', marginBottom: '1rem' }}>1. Erta Ale Volcano</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌋</span>
                <div>
                  Trek across blackened lava fields at night to peer into the <strong>permanent lava lake</strong> - one of only six in the world
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>⭐</span>
                <div>
                  Watch molten rock churn like a <strong>primordial cauldron</strong> under star-filled skies
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#FF4500', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Dallol Hydrothermal Field</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💎</span>
                <div>
                  Walk across <strong>neon-yellow sulfur crystals</strong> and acidic springs
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💧</span>
                <div>
                  See <strong>turquoise pools</strong> of superheated mineral water
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🚀</span>
                <div>
                  Marvel at the "<strong>Martian landscape</strong>" - NASA tests equipment here
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#FF4500', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Lake Afrera Salt Flats</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐪</span>
                <div>
                  Witness the <strong>Afar salt caravans</strong> - camels carrying salt slabs as they have for centuries
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#FF4500', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏊</span>
                <div>
                  Float in the <strong>super-salty waters</strong> (10x saltier than the Dead Sea)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#FF4500', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Brave the Danakil?</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              Walk on <strong>active volcanoes</strong> (with expert guides)
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              See <strong>geological processes</strong> found nowhere else
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              Experience <strong>nomadic Afar culture</strong>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              Photograph <strong>surreal colors</strong> - from sulfur yellows to iron oxide reds
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#FF4500', fontSize: '1.8rem', marginBottom: '1rem' }}>⚠️ Essential Tips</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🌤️ Best Time to Visit</h3>
            <p><strong>November-March</strong> (cooler temperatures)</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🛡️ Safety Requirements</h3>
            <p>Requires <strong>armed escorts</strong> and experienced guides</p>
          </div>
          <div>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>💪 Physical Challenge</h3>
            <p><strong>Not for the faint-hearted!</strong> Extreme heat and challenging terrain</p>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #FF4500, #FF6347)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Ready to Face the Gates of Hell?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Shirsh Travel Agency specializes in ethical, unforgettable experiences in the Danakil Depression - from volcano treks to cultural exchanges.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your extreme adventure!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: '#FF4500',
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

export default DanakilDepressionDetails; 