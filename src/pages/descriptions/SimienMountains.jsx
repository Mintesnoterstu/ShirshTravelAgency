import React from 'react';
import { Link } from 'react-router-dom';

const SimienMountains = () => {
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simien Mountains National Park</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>"Africa's Grand Canyon"</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Amhara Region, Ethiopia</p>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {/* Why Visit */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Why Visit?</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                A UNESCO World Heritage Site featuring one of Africa's most spectacular mountain landscapes with jagged peaks, deep valleys, and rare wildlife.
              </p>
            </section>

            {/* Key Features */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Key Features</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li><strong>Dramatic Escarpments:</strong> Sheer cliffs dropping up to 1,500m</li>
                <li><strong>Endemic Wildlife:</strong> Gelada baboons, Ethiopian wolves, Walia ibex</li>
                <li><strong>Ras Dashen:</strong> Ethiopia's highest peak (4,543m)</li>
                <li><strong>Scenic Hikes:</strong> From short walks to multi-day treks</li>
              </ul>
            </section>

            {/* Best Experiences */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Best Experiences</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✔</span> Sunrise views from Geech Camp
                </div>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✔</span> Gelada baboon encounters at Sankaber
                </div>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✔</span> 3-12 day trekking routes
                </div>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✔</span> Birdwatching (over 180 species)
                </div>
              </div>
            </section>

            {/* Travel Tips */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Travel Tips</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Pack warm layers (freezing at night)</li>
                <li>Hire local guides/mules for treks</li>
                <li>Allow 3+ days for proper exploration</li>
                <li>Combine with Gondar (2hr drive)</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Visitor Essentials */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Visitor Essentials</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Best Time:</strong> October-March (dry season)</p>
                <p><strong>Entry Fees:</strong> $20 USD (plus scout/guide fees)</p>
                <p><strong>Accommodation:</strong> Camping or Simien Lodge</p>
                <p><strong>Difficulty:</strong> Moderate to challenging hikes</p>
                <p><strong>Altitude:</strong> 3,000-4,500m (acclimatize first)</p>
              </div>
            </section>

            {/* Wildlife Highlights */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Wildlife Highlights</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Gelada Baboons:</strong> Large troops easily spotted</p>
                <p><strong>Ethiopian Wolves:</strong> Rare, best seen early morning</p>
                <p><strong>Walia Ibex:</strong> Endemic mountain goats</p>
                <p><strong>Birds:</strong> 180+ species including raptors</p>
              </div>
            </section>

            {/* Trekking Options */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Trekking Options</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Day Trips:</strong> Sankaber to Geech</p>
                <p><strong>3-Day Trek:</strong> Classic circuit</p>
                <p><strong>7-Day Trek:</strong> Full park exploration</p>
                <p><strong>12-Day Trek:</strong> Ras Dashen summit</p>
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

export default SimienMountains; 