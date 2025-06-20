import React from 'react';
import { Link } from 'react-router-dom';

const Axum = () => {
  return (
    <div style={{ paddingTop: '100px', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(rgba(30,60,114,0.9), rgba(42,82,152,0.9))',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: '20px',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Axum - Ancient Kingdom</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>"Cradle of Ethiopian Civilization"</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Tigray Region, Ethiopia</p>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {/* Historical Significance */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Historical Significance</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                Capital of the ancient Axumite Kingdom (1st-7th century AD), Axum was once a major trading power rivaling Rome and Persia. It was the center of a powerful empire that controlled trade routes between Africa, Arabia, and the Mediterranean. Many believe it houses the Ark of the Covenant.
              </p>
            </section>

            {/* Must-See Sites */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Must-See Sites</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>1. The Stelae Field</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>Giant obelisks marking royal tombs</li>
                  <li>The 24m Great Stele (largest fallen obelisk)</li>
                  <li>The returned Axum Obelisk (after 68 years in Italy)</li>
                  <li>UNESCO World Heritage Site</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Archaeological Treasures</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>Queen of Sheba's Palace ruins</li>
                  <li>King Ezana's Inscription (trilingual: Sabaean, Greek, Ge'ez)</li>
                  <li>The Tomb of the False Door</li>
                  <li>Ancient royal tombs and burial chambers</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Religious Sites</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>St. Mary of Zion Church complex</li>
                  <li>Chapel of the Tablet (alleged Ark resting place)</li>
                  <li>Abba Pentalewon Monastery</li>
                  <li>Ancient churches and religious artifacts</li>
                </ul>
              </div>
            </section>

            {/* Cultural Experiences */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Cultural Experiences</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Attend annual Hidar Zion festival (November)</li>
                <li>Visit during Timkat (January) for special ceremonies</li>
                <li>See ancient Ge'ez manuscripts at the archaeological museum</li>
                <li>Witness traditional stone-carving techniques</li>
                <li>Experience traditional Axumite pottery making</li>
              </ul>
            </section>

            {/* Travel Tips */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Travel Tips</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Fly directly to Axum from Addis (1.5 hours)</li>
                <li>Combine with Yeha Temple and Debre Damo</li>
                <li>Early mornings best for photography</li>
                <li>Respect strict dress codes at religious sites</li>
                <li>Visit at night for dramatic lighting of the stelae</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Visitor Essentials */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Visitor Essentials</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Entry Fees:</strong> $10-20 per site</p>
                <p><strong>Best Time:</strong> November-February (pleasant temperatures)</p>
                <p><strong>Photography:</strong> Restricted in some religious areas</p>
                <p><strong>Local Guides:</strong> Highly recommended ($15-20/day)</p>
              </div>
            </section>

            {/* Recommended Stay */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Recommended Stay</h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>2 full days to explore properly</p>
            </section>

            {/* Best Time to Visit */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Best Time to Visit</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Peak Season:</strong> November-February</p>
                <p><strong>Avoid:</strong> July-September (rainy season)</p>
                <p><strong>Special:</strong> November for Hidar Zion festival</p>
              </div>
            </section>

            {/* Back Button */}
            <Link to="/tours" style={{
              display: 'block',
              background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '25px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'transform 0.2s'
            }}>
              ← Back to Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Axum; 