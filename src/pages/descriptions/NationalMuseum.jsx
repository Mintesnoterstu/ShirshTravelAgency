import React from 'react';
import { Link } from 'react-router-dom';

const NationalMuseum = () => {
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>National Museum of Ethiopia</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>"Home of Lucy"</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Addis Ababa, Ethiopia</p>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {/* Historical Significance */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Historical Significance</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                The National Museum of Ethiopia houses some of the most important archaeological and anthropological collections in Africa, including the famous "Lucy" skeleton (3.2 million years old). It showcases Ethiopia's rich cultural heritage from prehistoric times to the modern era.
              </p>
            </section>

            {/* Must-See Exhibits */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Must-See Exhibits</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Lucy Gallery</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>Original Lucy skeleton (Australopithecus afarensis)</li>
                  <li>3.2 million-year-old hominid remains</li>
                  <li>Evolutionary timeline displays</li>
                  <li>Interactive exhibits on human origins</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Royal Regalia</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>Emperor Haile Selassie's coronation artifacts</li>
                  <li>Royal crowns and ceremonial objects</li>
                  <li>Historical photographs and documents</li>
                  <li>Imperial era memorabilia</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#2a5298', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Archaeological Collections</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', paddingLeft: '1.5rem' }}>
                  <li>Ancient Axumite artifacts</li>
                  <li>Medieval church treasures</li>
                  <li>Traditional crafts and tools</li>
                  <li>Ethnographic displays from all regions</li>
                </ul>
              </div>
            </section>

            {/* Cultural Experiences */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Cultural Experiences</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Guided tours in multiple languages</li>
                <li>Educational programs for students</li>
                <li>Special exhibitions and events</li>
                <li>Research library access</li>
                <li>Cultural workshops and demonstrations</li>
              </ul>
            </section>

            {/* Travel Tips */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Travel Tips</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Combine with nearby Holy Trinity Cathedral</li>
                <li>Visit Merkato market after museum</li>
                <li>Allow 2-3 hours for comprehensive visit</li>
                <li>Photography restrictions in some areas</li>
                <li>Best visited in morning when less crowded</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Visitor Essentials */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Visitor Essentials</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Entry Fees:</strong> ~200 ETB for foreigners</p>
                <p><strong>Hours:</strong> 8:30AM-5:30PM daily</p>
                <p><strong>Location:</strong> King George VI Street, Addis Ababa</p>
                <p><strong>Photography:</strong> Restricted in some areas</p>
              </div>
            </section>

            {/* Recommended Stay */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Recommended Stay</h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>2-3 hours for comprehensive visit</p>
            </section>

            {/* Best Time to Visit */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Best Time to Visit</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Peak Season:</strong> October-May</p>
                <p><strong>Best Time:</strong> Morning (less crowded)</p>
                <p><strong>Avoid:</strong> Weekends (very busy)</p>
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

export default NationalMuseum; 