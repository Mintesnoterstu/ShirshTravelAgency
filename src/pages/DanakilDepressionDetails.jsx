import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const DanakilDepressionDetails = () => {
  const { currentTheme } = useTheme();
  console.log('DanakilDepressionDetails component is rendering!'); // Debug log
  
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
        background: `linear-gradient(rgba(255, 140, 0, 0.5), rgba(255, 215, 0, 0.5)), url('https://waltainfo.com/wp-content/uploads/2023/10/Dal9ol.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: 'white', 
        padding: '4rem 2rem', 
        borderRadius: '24px',
        marginBottom: '2rem',
        boxShadow: `0 4px 15px ${currentTheme.shadow}`,
        minHeight: '380px',
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
          Danakil Depression - The Hottest Place on Earth
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.89)',
          maxWidth: '800px'
        }}>
          Where Fire Meets Salt in an Alien Landscape
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>Journey to the Depths of the Earth</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: `4px solid ${currentTheme.primary}`
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: currentTheme.text }}>
            Welcome to the <strong>Danakil Depression</strong>, one of the most extreme and otherworldly places on our planet. Located in northern Ethiopia, this geological wonder is <strong>125 meters below sea level</strong> and holds the record for the <strong>hottest inhabited place on Earth</strong>, with temperatures regularly exceeding 50°C (122°F). This alien landscape features <strong>active volcanoes, bubbling lava lakes, colorful sulfur springs, and vast salt flats</strong> that have been mined by the Afar people for centuries. The Danakil Depression is not just a destination—it's an adventure into one of the most inhospitable yet mesmerizing environments on Earth.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>✨ The Wonders of the Danakil</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>1. Erta Ale - The Smoking Mountain</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>The Gateway to Hell</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              Experience the <strong>Erta Ale volcano</strong>, one of the world's most active volcanoes:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌋</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Lava Lake</strong>: Witness the <strong>permanent lava lake</strong> bubbling in the crater.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌅</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Night Trek</strong>: Climb the volcano at <strong>night</strong> to avoid the scorching heat.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏕️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Crater Camping</strong>: Spend the night <strong>camping on the rim</strong> of the volcano.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>2. Dallol - The Rainbow Springs</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: currentTheme.primary }}>Nature's Art Gallery</p>
            <p style={{ marginBottom: '1rem', color: currentTheme.text }}>
              Explore the <strong>Dallol hydrothermal field</strong>, a kaleidoscope of colors:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎨</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Colorful Springs</strong>: <strong>Yellow, green, and orange</strong> mineral deposits create surreal landscapes.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌡️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Boiling Pools</strong>: <strong>Acidic hot springs</strong> with temperatures up to 90°C (194°F).
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🧂</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Salt Formations</strong>: <strong>Otherworldly salt structures</strong> shaped by wind and water.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>3. Lake Karum - The Salt Flats</h3>
          <div style={{ 
            background: currentTheme.cardBackground, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏔️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Salt Mountains</strong>: Massive <strong>salt formations</strong> rising from the lake bed.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐪</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Camel Caravans</strong>: Watch <strong>traditional salt caravans</strong> crossing the desert.
                </div>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌅</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Mirror Effect</strong>: The salt flats create <strong>perfect reflections</strong> at sunrise and sunset.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Danakil Depression Belongs on Your Bucket List</h2>
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
                <strong>Unique Experience</strong> – One of the most extreme environments on Earth.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Active Volcano</strong> – Witness a permanent lava lake up close.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Alien Landscape</strong> – Colors and formations found nowhere else.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Cultural Heritage</strong> – Traditional salt mining by Afar people.
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
            <p style={{ color: currentTheme.text }}>November–March (cooler temperatures). Avoid April–October extreme heat.</p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>⚠️ Safety Considerations</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: currentTheme.text }}>
              <li><strong>Guided Tours Only</strong>: The area requires experienced guides and permits.</li>
              <li><strong>Physical Fitness</strong>: Good health required for the challenging conditions.</li>
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
              <p style={{ color: currentTheme.text }}>Erta Ale volcano and basic salt flats visit</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>4 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Add Dallol springs and Lake Karum exploration</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>5 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Complete Danakil experience with cultural interactions</p>
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
        <h2 style={{ marginBottom: '1rem' }}>🌋 Ready to Explore the Hottest Place on Earth?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Let Shirsh Travel Agency guide you through this extreme and otherworldly landscape.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your extreme adventure!
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

export default DanakilDepressionDetails; 