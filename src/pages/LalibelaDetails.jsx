import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const LalibelaDetails = () => {
  const { currentTheme } = useTheme();
  console.log('LalibelaDetails component is rendering!'); // Debug log
  
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
        background: `linear-gradient(rgba(139, 69, 19, 0.5), rgba(205, 133, 63, 0.5)), url('https://assets.vogue.com/photos/5ac2ae2a022a720bbd098ef1/master/w_1920,c_limit/00-story-image-lalibela-ethiopia-is-the-next-machu-picchu.jpg')`,
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
          Lalibela - Ethiopia's Sacred Rock-Hewn Churches
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.89)',
          maxWidth: '800px'
        }}>
          Where Ancient Faith Meets Architectural Genius
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>The New Jerusalem of Ethiopia</h2>
        <div style={{ 
          background: currentTheme.surface, 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: `4px solid ${currentTheme.primary}`
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: currentTheme.text }}>
            Step into a world of ancient spirituality and architectural marvels in <strong>Lalibela</strong>, Ethiopia's most revered religious destination. Known as the "New Jerusalem," this UNESCO World Heritage Site is home to <strong>11 breathtaking rock-hewn churches</strong>, carved entirely out of solid rock in the 12th century under the reign of King Lalibela. These extraordinary structures represent one of the world's most remarkable feats of engineering and devotion, where faith literally moved mountains.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>✨ Sacred Wonders of Lalibela</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>1. The Iconic Cross-Shaped Church</h3>
          <div style={{ 
            background: currentTheme.surface, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.primary}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>⛪</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Bete Giyorgis (Church of St. George)</strong>: The most iconic church, perfectly carved in the shape of a cross
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏗️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Monolithic Architecture</strong>: Carved entirely from solid rock, standing 12 meters tall
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎨</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Intricate Details</strong>: Windows, doors, and decorative elements all carved from the same rock
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>2. The Northern Group of Churches</h3>
          <div style={{ 
            background: currentTheme.surface, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.primary}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏛️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Bete Medhane Alem</strong>: The largest monolithic church in the world, measuring 33.5m x 23.5m
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👑</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Bete Amanuel</strong>: Believed to be the former royal chapel, known for its intricate exterior
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.primary, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🕊️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Bete Maryam & Bete Golgotha</strong>: Connected churches with beautiful frescoes and religious artifacts
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: currentTheme.primary, fontSize: '1.4rem', marginBottom: '1rem' }}>3. Underground Tunnels and Passages</h3>
          <div style={{ 
            background: currentTheme.surface, 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🕳️</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Interconnected Network</strong>: Tunnels and trenches connecting all churches symbolically
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💧</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Water Channels</strong>: Sophisticated drainage systems carved into the rock
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌅</span>
                <div style={{ color: currentTheme.text }}>
                  <strong>Asheten Mariam Monastery</strong>: A scenic hike with panoramic views of Lalibela
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>📸 Visual Journey Through Lalibela's Churches</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1rem' 
        }}>
          <div style={{ 
            background: `linear-gradient(rgba(139, 69, 19, 0.5), rgba(205, 133, 63, 0.5)), url('https://media.istockphoto.com/id/2164800078/photo/church-of-saint-george-bete-giyorgis-lalibela-ethiopia-africa.jpg?s=2048x2048&w=is&k=20&c=okDGXDg56jcu4zVj5h0C1IHGT6BHm04f2S7dQsUobtc=')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>🔹 Bete Giyorgis (Church of St. George)</h3>
            <p style={{ 
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              margin: 0,
              fontWeight: '500'
            }}>The most iconic, cross-shaped church, perfectly carved into the rock.</p>
          </div>
          <div style={{ 
            background: `linear-gradient(rgba(139, 69, 19, 0.5), rgba(205, 133, 63, 0.5)), url('https://media.istockphoto.com/id/1148806016/photo/bete-amanuel-church-in-lalibela-ethiopia.jpg?s=2048x2048&w=is&k=20&c=uXpF5l36xPoIgQgJNUVVOVqRdc3RcC0ZvyvONOAYbjA=')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>🔹 Bete Amanuel</h3>
            <p style={{ 
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              margin: 0,
              fontWeight: '500'
            }}>Believed to be the former royal chapel, known for its intricate exterior.</p>
          </div>
          <div style={{ 
            background: `linear-gradient(rgba(139, 69, 19, 0.5), rgba(205, 133, 63, 0.5)), url('https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.XXX.7399150.7055475/516758.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>🔹 Bete Medhane Alem</h3>
            <p style={{ 
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              margin: 0,
              fontWeight: '500'
            }}>The largest monolithic church in the world.</p>
          </div>
          <div style={{ 
            background: `linear-gradient(rgba(139, 69, 19, 0.5), rgba(205, 133, 63, 0.5)), url('https://holeinthedonut.com/wp-content/uploads/2018/05/Ethiopia-Bete-Maryam-in-northeastern-group-of-rock-hewn-churches-of-Lalibela.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>🔹 Bete Maryam & Bete Golgotha</h3>
            <p style={{ 
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              margin: 0,
              fontWeight: '500'
            }}>Connected churches with beautiful frescoes and religious artifacts.</p>
          </div>
          <div style={{ 
            background: `linear-gradient(rgba(139, 69, 19, 0.5), rgba(205, 133, 63, 0.5)), url('https://therestlessroad.com/wp-content/uploads/2014/01/IMG_2639.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '1.5rem', 
            borderRadius: '10px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: `0 2px 8px ${currentTheme.shadow}`,
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>🔹 Asheten Mariam Monastery</h3>
            <p style={{ 
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
              margin: 0,
              fontWeight: '500'
            }}>A scenic hike with panoramic views of Lalibela.</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: currentTheme.primary, fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Lalibela Belongs on Your Bucket List</h2>
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
                <strong>UNESCO World Heritage Site</strong> – Walk through history in one of the world's most extraordinary religious complexes.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Incredible Architecture</strong> – Marvel at the underground churches, interconnected tunnels, and intricate carvings.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Spiritual Experience</strong> – Witness vibrant Ethiopian Orthodox ceremonies and festivals, including <strong>Timkat (Epiphany)</strong>.
              </div>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: currentTheme.accent, marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <div style={{ color: currentTheme.text }}>
                <strong>Stunning Scenery</strong> – Nestled in the Lasta Mountains, Lalibela offers breathtaking highland views.
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
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>🌿 Optimal Season</h3>
            <p style={{ color: currentTheme.text }}><strong>October to March</strong> (dry season). Peak season is October to February.</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>✝ Special Events</h3>
            <p style={{ color: currentTheme.text }}><strong>Gena (Ethiopian Christmas)</strong> on January 7th offers the most vibrant celebrations in Lalibela.</p>
          </div>
          <div>
            <h3 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}>🌧️ Avoid</h3>
            <p style={{ color: currentTheme.text }}><strong>June to September</strong> (rainy season) can make travel challenging.</p>
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
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>3-4 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Lalibela Pilgrimage Tour - Deep dive into the sacred sites</p>
            </div>
            <div style={{ padding: '1rem', background: currentTheme.surface, borderRadius: '8px' }}>
              <h4 style={{ color: currentTheme.primary, marginBottom: '0.5rem' }}><strong>10-12 Days</strong></h4>
              <p style={{ color: currentTheme.text }}>Historic North Circuit - Combine with Gondar, Axum & Simien Mountains</p>
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
        <h2 style={{ marginBottom: '1rem' }}>✨ Let Shirsh Travel Agency guide you through Ethiopia's spiritual heartland! ✨</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Contact us today to book your journey to Lalibela!</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Would you like any modifications or additional details (e.g., hiking options, luxury stays, or festival dates)?
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

export default LalibelaDetails; 