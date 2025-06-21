import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const OmoValleyDetails = () => {
  const { currentTheme } = useTheme();
  console.log('OmoValleyDetails component is rendering!'); // Debug log
  
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
          Omo Valley - Cradle of Humanity
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.89)',
          maxWidth: '800px'
        }}>
          Where Ancient Traditions Meet Modern Discovery
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>A Journey to Humanity's Roots</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: `4px solid ${currentTheme.primary}`
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: currentTheme.text }}>
            Welcome to the <strong>Omo Valley</strong>, a UNESCO World Heritage Site and one of the most culturally diverse regions on Earth. This remote valley in southern Ethiopia is home to <strong>eight distinct ethnic groups</strong>, each with their own unique traditions, languages, and ways of life. From the <strong>Mursi with their distinctive lip plates</strong> to the <strong>Hamer with their elaborate body decorations</strong>, the Omo Valley offers visitors an unparalleled opportunity to witness cultures that have remained largely unchanged for centuries. This is also where some of the <strong>oldest human fossils</strong> have been discovered, earning it the title "Cradle of Humanity."
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>✨ The Peoples of the Omo Valley</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>1. The Mursi People</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>The Lip Plate People</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              The <strong>Mursi</strong> are perhaps the most famous of the Omo Valley tribes:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💄</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Lip Plates</strong>: Women wear <strong>ceramic or wooden plates</strong> in their lower lips as a sign of beauty.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎨</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Body Painting</strong>: Intricate <strong>white chalk designs</strong> for ceremonies and celebrations.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏹</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Stick Fighting</strong>: Traditional <strong>donga (stick fighting)</strong> competitions among young men.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>2. The Hamer People</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>The Bull Jumping Ceremony</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              The <strong>Hamer</strong> are known for their elaborate rituals and ceremonies:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐂</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Bull Jumping</strong>: Young men must <strong>jump over cattle</strong> to prove their manhood.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🧴</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Body Adornments</strong>: Women wear <strong>beaded necklaces</strong> and <strong>clay hairstyles</strong>.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🥁</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Traditional Music</strong>: <strong>Drumming and dancing</strong> play central roles in ceremonies.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>3. Other Ethnic Groups</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏹</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Karo People</strong>: Known for their <strong>elaborate body painting</strong> and scarification.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌾</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Dassanech People</strong>: <strong>Pastoralists</strong> living along the Omo River delta.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏺</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Nyangatom People</strong>: <strong>Warrior culture</strong> with distinctive beadwork and hairstyles.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Omo Valley Belongs on Your Bucket List</h2>
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
                <strong>Cultural Diversity</strong> – Eight distinct ethnic groups in one valley.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Ancient Traditions</strong> – Cultures unchanged for centuries.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Archaeological Significance</strong> – Home to some of the oldest human fossils.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Authentic Experience</strong> – Genuine cultural immersion opportunities.
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
            <p style={{ color: currentTheme.text }}>June–September (dry season). Avoid heavy rains in March–May.</p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>🎭 Cultural Events</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: currentTheme.text }}>
              <li><strong>Bull Jumping Ceremonies</strong>: Most common during dry season.</li>
              <li><strong>Harvest Festivals</strong>: Various celebrations throughout the year.</li>
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
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>3 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Visit 2-3 ethnic groups, basic cultural immersion</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>5 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Visit 4-5 ethnic groups, attend ceremonies</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>7 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Complete cultural immersion, all major ethnic groups</p>
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
        <h2 style={{ marginBottom: '1rem' }}>🌍 Ready to Discover Humanity's Cradle?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Let Shirsh Travel Agency guide you through the most culturally diverse region on Earth.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your cultural adventure!
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

export default OmoValleyDetails; 