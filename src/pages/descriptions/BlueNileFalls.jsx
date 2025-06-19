import React from 'react';
import { Link } from 'react-router-dom';

const BlueNileFalls = () => {
  return (
    <div style={{ paddingTop: '80px', background: '#f8f9fa', minHeight: '100vh' }}>
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Blue Nile Falls</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>"The Smoking Water"</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Amhara Region, Ethiopia</p>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {/* Natural Significance */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Natural Significance</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                Known locally as "Tis Issat" (The Smoking Water), the Blue Nile Falls are one of Ethiopia's most spectacular natural wonders. The falls create a dramatic cascade as the Blue Nile plunges over a 45-meter drop, creating a mist that can be seen from miles away.
              </p>
            </section>

            {/* Must-See Sites */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Must-See Sites</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>1. The Main Falls</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>45-meter drop creating spectacular mist</li>
                  <li>Best viewing from Portuguese Bridge</li>
                  <li>Rainbow formations on sunny days</li>
                  <li>Thundering sound of rushing water</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Surrounding Area</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>Portuguese Bridge (17th century)</li>
                  <li>Hiking trails around the falls</li>
                  <li>Local villages and markets</li>
                  <li>Bird watching opportunities</li>
                </ul>
              </div>
            </section>

            {/* Activities */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Activities</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Photography of the dramatic falls</li>
                <li>Hiking along the river trails</li>
                <li>Bird watching in the lush surroundings</li>
                <li>Visiting local villages and markets</li>
                <li>Crossing the historic Portuguese Bridge</li>
              </ul>
            </section>

            {/* Travel Tips */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Travel Tips</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Visit during rainy season (June-September) for maximum flow</li>
                <li>Bring rain gear as you'll get wet from the mist</li>
                <li>Wear sturdy shoes for hiking</li>
                <li>Combine with Bahir Dar and Lake Tana</li>
                <li>Best photography in early morning or late afternoon</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Visitor Essentials */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Visitor Essentials</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Entry Fees:</strong> $5-10 for foreigners</p>
                <p><strong>Best Time:</strong> June-September (rainy season)</p>
                <p><strong>Access:</strong> 30km from Bahir Dar</p>
                <p><strong>Photography:</strong> Permitted (bring protection from mist)</p>
              </div>
            </section>

            {/* Recommended Stay */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Recommended Stay</h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>Half-day trip from Bahir Dar</p>
            </section>

            {/* Best Time to Visit */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Best Time to Visit</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Peak Season:</strong> June-September</p>
                <p><strong>Avoid:</strong> February-May (low water)</p>
                <p><strong>Special:</strong> Early morning for photography</p>
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

export default BlueNileFalls; 