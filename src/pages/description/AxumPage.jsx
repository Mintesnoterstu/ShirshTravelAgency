import React from 'react';
import { Link } from 'react-router-dom';

const AxumPage = () => {
  return (
    <div style={{ paddingTop: '80px', background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/6f/b2/15/from-the-early-4th-century.jpg?w=2000&h=-1&s=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Axum Obelisks & Ruins</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: 800, margin: '0 auto' }}>
          Cradle of Ethiopian Civilization - Ancient Kingdom of the Axumite Empire
        </p>
        <Link to="/tours" style={{
          background: '#ffd700',
          color: '#1e3c72',
          padding: '1rem 2rem',
          borderRadius: '25px',
          textDecoration: 'none',
          display: 'inline-block',
          marginTop: '2rem',
          fontWeight: 'bold'
        }}>
          ← Back to All Destinations
        </Link>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        
        {/* Historical Context */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Historical Context</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
            Capital of the ancient Axumite Kingdom (1st-7th century AD), once a major trading power rivaling Rome and Persia. Believed by many to house the Ark of the Covenant. Axum was the center of a powerful empire that controlled trade routes between Africa, Arabia, and the Mediterranean.
          </p>
        </section>

        {/* Must-See Sites */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Must-See Sites</h2>
          
          {/* Stelae Field */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
            <h3 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>1. The Stelae Field</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Giant Obelisks</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>Marking royal tombs, these massive stone monuments showcase the engineering prowess of the Axumite civilization.</p>
              </div>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>The Great Stele</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>The 24m Great Stele is the largest fallen obelisk, demonstrating the scale of Axumite ambition.</p>
              </div>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Returned Axum Obelisk</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>After 68 years in Italy, this obelisk was returned to its rightful place in Axum.</p>
              </div>
            </div>
          </div>

          {/* Archaeological Treasures */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
            <h3 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>2. Archaeological Treasures</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Queen of Sheba's Palace</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>Ruins of the legendary queen's palace, a testament to Axum's royal heritage.</p>
              </div>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>King Ezana's Inscription</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>Written in Sabaean, Greek and Ge'ez, this trilingual inscription is a key historical document.</p>
              </div>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Tomb of the False Door</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>An ancient burial site with distinctive architectural features.</p>
              </div>
            </div>
          </div>

          {/* Religious Sites */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>3. Religious Sites</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>St. Mary of Zion Church</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>The church complex where the Ark of the Covenant is said to be housed.</p>
              </div>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Chapel of the Tablet</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>The alleged resting place of the Ark of the Covenant, accessible only to its guardian.</p>
              </div>
              <div>
                <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Abba Pentalewon Monastery</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>An ancient monastery with rich religious history and traditions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visitor Essentials */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Visitor Essentials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Entry Fees</h4>
              <p style={{ color: '#666' }}>$10-20 per site</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Best Time</h4>
              <p style={{ color: '#666' }}>November-February (pleasant temperatures)</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Photography</h4>
              <p style={{ color: '#666' }}>Restricted in some religious areas</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Local Guides</h4>
              <p style={{ color: '#666' }}>Highly recommended ($15-20/day)</p>
            </div>
          </div>
        </section>

        {/* Cultural Insights */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Cultural Insights</h2>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}>
              <li>Attend annual Hidar Zion festival (November)</li>
              <li>Visit during Timkat (January) for special ceremonies</li>
              <li>Observe traditional stone-carving techniques</li>
              <li>See ancient Ge'ez manuscripts at the archaeological museum</li>
              <li>Witness traditional Axumite pottery making</li>
              <li>Visit at night for dramatic lighting of the stelae</li>
            </ul>
          </div>
        </section>

        {/* Travel Tips */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Travel Tips</h2>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}>
              <li>Fly directly to Axum from Addis (1.5 hours)</li>
              <li>Combine with Yeha Temple and Debre Damo</li>
              <li>Early mornings best for photography</li>
              <li>Respect strict dress codes at religious sites</li>
              <li>Allow 2 full days to explore properly</li>
              <li>Book accommodations in advance during peak season</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Explore Axum?</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
            Recommended stay: 2 full days to explore properly
          </p>
          <Link to="/contact" style={{
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>
            Book Your Axum Tour
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AxumPage; 