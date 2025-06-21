import React from 'react';
import { Link } from 'react-router-dom';

const LalibelaDetails = () => {
  console.log('LalibelaDetails component is rendering!'); // Debug log
  
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
        background: `linear-gradient(rgba(139, 69, 19, 0.8), rgba(205, 133, 63, 0.8)), url('https://assets.vogue.com/photos/5ac2ae2a022a720bbd098ef1/master/w_1920,c_limit/00-story-image-lalibela-ethiopia-is-the-next-machu-picchu.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white', 
        padding: '3rem 2rem', 
        borderRadius: '15px',
        marginBottom: '2rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
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
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Discover the Sacred Wonders of Lalibela
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          maxWidth: '800px',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Step into a world of ancient spirituality and architectural marvels in <strong>Lalibela</strong>, Ethiopia's most revered religious destination. Known as the "New Jerusalem," this UNESCO World Heritage Site is home to <strong>11 breathtaking rock-hewn churches</strong>, carved entirely out of solid rock in the 12th century under the reign of King Lalibela.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>Why Visit Lalibela?</h2>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #8B4513'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>UNESCO World Heritage Site</strong> – Walk through history in one of the world's most extraordinary religious complexes.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Incredible Architecture</strong> – Marvel at the underground churches, interconnected tunnels, and intricate carvings.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Spiritual Experience</strong> – Witness vibrant Ethiopian Orthodox ceremonies and festivals, including <strong>Timkat (Epiphany)</strong>.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Stunning Scenery</strong> – Nestled in the Lasta Mountains, Lalibela offers breathtaking highland views.
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>Top Attractions</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1rem' 
        }}>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>🔹 Bete Giyorgis (Church of St. George)</h3>
            <p>The most iconic, cross-shaped church, perfectly carved into the rock.</p>
          </div>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>🔹 Bete Medhane Alem</h3>
            <p>The largest monolithic church in the world.</p>
          </div>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>🔹 Bete Maryam & Bete Golgotha</h3>
            <p>Adorned with ancient frescoes and religious artifacts.</p>
          </div>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>🔹 Asheten Mariam Monastery</h3>
            <p>A scenic hike with panoramic views of Lalibela.</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>Best Time to Visit</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>
            The best time to visit Lalibela is during the dry season, which runs from October to March, with the peak season being from October to February.
          </p>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#28a745', marginBottom: '0.8rem', fontSize: '1.3rem' }}>🌿 October to March (Dry Season)</h3>
            <p style={{ marginBottom: '0.5rem' }}>
              This is generally considered the optimal time to visit Lalibela. The weather is pleasant, with warm days and cool nights, and the skies are typically clear.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#28a745', marginBottom: '0.8rem', fontSize: '1.3rem' }}>✝ Peak Season (October to February)</h3>
            <p style={{ marginBottom: '0.5rem' }}>
              This period is particularly popular due to the favorable weather conditions and the possibility of witnessing the Ethiopian Christmas (Genna) celebrations in January.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#28a745', marginBottom: '0.8rem', fontSize: '1.3rem' }}>🌤️ Shoulder Seasons (May and October)</h3>
            <p style={{ marginBottom: '0.5rem' }}>
              If you prefer fewer crowds and are willing to risk some rain, May and October can offer a good balance of pleasant weather and fewer tourists.
            </p>
          </div>

          <div style={{ marginBottom: '0.5rem' }}>
            <h3 style={{ color: '#dc3545', marginBottom: '0.8rem', fontSize: '1.3rem' }}>🌧️ Rainy Season (June to September)</h3>
            <p style={{ marginBottom: '0.5rem' }}>
              While possible to visit, the rainy season can make travel and sightseeing more challenging due to muddy roads and potentially heavy downpours.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>Tour Packages</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px' }}>
              <strong>Lalibela Pilgrimage Tour</strong> (3-4 days) – Deep dive into the sacred sites.
            </li>
            <li style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px' }}>
              <strong>Historic North Circuit</strong> (10-12 days) – Combine with Gondar, Axum & Simien Mountains.
            </li>
          </ul>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #8B4513, #A0522D)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>✨ Let Shirsh Travel Agency guide you through Ethiopia's spiritual heartland! ✨</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          📞 <em>Contact us today to book your journey to Lalibela!</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          Would you like any modifications or additional details (e.g., hiking options, luxury stays, or festival dates)?
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

export default LalibelaDetails; 