import React from 'react';
import { Link } from 'react-router-dom';

const OmoValleyDetails = () => {
  console.log('OmoValleyDetails component is rendering!'); // Debug log
  
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
        background: 'linear-gradient(135deg, #8B4513, #D2691E)', 
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
          Omo Valley - Where Time Stands Still
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          A Living Museum of Ancient Tribal Traditions
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>Africa's Cultural Epicenter</h2>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #8B4513'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            In Ethiopia's remote southwest, the <strong>Omo Valley</strong> shelters some of the world's most fascinating indigenous groups. This UNESCO World Heritage Site is home to:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem' }}>👥</span>
              <strong>Over 50 distinct tribes</strong>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem' }}>🏺</span>
              <strong>Last practitioners</strong> of ancient body modifications
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem' }}>🛒</span>
              <strong>Vibrant weekly markets</strong> where cultures collide
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>🎨 Tribal Highlights</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>1. Mursi People</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💄</span>
                <div>
                  Famous for <strong>clay lip plates</strong> (symbol of beauty)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎨</span>
                <div>
                  Intricate <strong>body scarification</strong> patterns
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Hamer Tribe</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐂</span>
                <div>
                  Witness the <strong>bull-jumping ceremony</strong> (coming-of-age ritual)
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👗</span>
                <div>
                  Admire their <strong>ochre-dyed hairstyles</strong> and beaded leather skirts
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8B4513', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Karo People</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎭</span>
                <div>
                  Masters of <strong>elaborate body painting</strong> using white chalk
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B4513', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏘️</span>
                <div>
                  Cliffside villages overlooking the <strong>Omo River</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>📸 Cultural Experiences</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              Attend a <strong>Dimi ceremony</strong> (Hamer engagement festival)
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              Visit <strong>Turmi Market</strong> to see tribes trading goods
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              Learn <strong>traditional honey harvesting</strong> with the Banna people
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Visit Omo Valley?</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#856404', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Authentic encounters</strong> with intact cultures
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#856404', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Photographic paradise</strong> of colors and textures
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#856404', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Life-changing perspective</strong> on human diversity
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>⚠️ Ethical Travel Tips</h2>
        <div style={{ 
          background: '#f8d7da', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #dc3545'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#dc3545', marginRight: '10px', fontSize: '1.2rem' }}>📷</span>
              Always <strong>ask permission</strong> before photographing
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#dc3545', marginRight: '10px', fontSize: '1.2rem' }}>🏨</span>
              Support <strong>community-run lodges</strong>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#dc3545', marginRight: '10px', fontSize: '1.2rem' }}>👥</span>
              Visit with <strong>culturally sensitive guides</strong>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #8B4513, #D2691E)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Ready for These Adventures?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Shirsh Travel Agency specializes in ethical, unforgettable experiences in both destinations - from volcano treks to cultural exchanges.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your cultural journey!
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

export default OmoValleyDetails; 