import React from 'react';
import { Link } from 'react-router-dom';

const Tiya = () => {
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Tiya Megaliths</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>"Ancient Standing Stones"</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Southern Nations, Nationalities, and Peoples' Region, Ethiopia</p>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {/* Historical Significance */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Historical Significance</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                A UNESCO World Heritage site featuring mysterious ancient stelae (standing stones) with intricate carvings, dating back to the 12th-14th centuries. The Tiya stones mark ancient burial grounds and are one of Ethiopia's most enigmatic archaeological sites.
              </p>
            </section>

            {/* Must-See Sites */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Must-See Sites</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>1. The Stelae Field</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>36 standing stones with carvings</li>
                  <li>Ancient burial markers</li>
                  <li>Mysterious symbols and inscriptions</li>
                  <li>UNESCO World Heritage status</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Archaeological Features</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>Ancient burial chambers</li>
                  <li>Stone tools and artifacts</li>
                  <li>Traditional Gurage culture</li>
                  <li>Local archaeological museum</li>
                </ul>
              </div>
            </section>

            {/* Cultural Experiences */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Cultural Experiences</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Learn about ancient burial traditions</li>
                <li>Visit local Gurage villages</li>
                <li>See traditional stone carving techniques</li>
                <li>Experience local coffee ceremonies</li>
              </ul>
            </section>

            {/* Travel Tips */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Travel Tips</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Combine with Addis Ababa day trip</li>
                <li>Hire a local guide for interpretation</li>
                <li>Respect the archaeological site</li>
                <li>Best visited in morning or afternoon</li>
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
                <p><strong>Best Time:</strong> October-May (avoid rains)</p>
                <p><strong>Access:</strong> 80km from Addis Ababa</p>
                <p><strong>Photography:</strong> Permitted</p>
              </div>
            </section>

            {/* Recommended Stay */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Recommended Stay</h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>Half-day trip from Addis Ababa</p>
            </section>

            {/* Best Time to Visit */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Best Time to Visit</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Peak Season:</strong> October-May</p>
                <p><strong>Avoid:</strong> June-September (rainy season)</p>
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

export default Tiya; 