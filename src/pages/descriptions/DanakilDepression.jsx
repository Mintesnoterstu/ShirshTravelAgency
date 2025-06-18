import React from 'react';
import { Link } from 'react-router-dom';

const DanakilDepression = () => {
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Danakil Depression</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>Hottest Place on Earth</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Afar Region, Ethiopia</p>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {/* Why Visit */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Why Visit?</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                One of Earth's most extreme environments with volcanic landscapes, acid pools, and salt flats. A truly otherworldly experience that feels like visiting another planet.
              </p>
            </section>

            {/* Must-See Attractions */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Must-See Attractions</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li><strong>Erta Ale Volcano:</strong> Permanent lava lake (night hike)</li>
                <li><strong>Dallol Hydrothermal Field:</strong> Neon-colored sulfur springs</li>
                <li><strong>Lake Afrera:</strong> Salt mining operations</li>
                <li><strong>Salt Caravans:</strong> Afar people transporting salt slabs</li>
              </ul>
            </section>

            {/* Unique Experiences */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Unique Experiences</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Camping under stars at Erta Ale</li>
                <li>Walking on salt crusts at -125m below sea level</li>
                <li>Witnessing traditional salt mining</li>
                <li>Exploring neon-colored acid pools</li>
              </ul>
            </section>

            {/* Survival Guide */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Survival Guide</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li><strong>When to Go:</strong> November-February (coolest)</li>
                <li><strong>Temperatures:</strong> 45°C+ daytime (pack accordingly)</li>
                <li><strong>Essential Gear:</strong> Headlamp, hiking boots, electrolytes</li>
                <li><strong>Safety:</strong> Travel with armed escorts</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Logistics */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Logistics</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>✈ Access:</strong> Fly to Mekele then 4WD</p>
                <p><strong>💧 Hydration:</strong> Drink 5+ liters water daily</p>
                <p><strong>👕 Clothing:</strong> Light, covering clothing</p>
                <p><strong>⚠ Warning:</strong> Not for heart conditions</p>
              </div>
            </section>

            {/* Erta Ale Lava Lake */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Erta Ale Lava Lake</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Geological Wonder:</strong> One of only five permanent lava lakes on Earth</p>
                <p><strong>Activity:</strong> Continuously active since 1906</p>
                <p><strong>Night Hike:</strong> 3-4 hour ascent (10km)</p>
                <p><strong>Best Views:</strong> Pre-dawn when most active</p>
              </div>
            </section>

            {/* Key Facts */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Key Facts</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Altitude:</strong> 613m</p>
                <p><strong>Crater Size:</strong> 50m diameter</p>
                <p><strong>Lava Temp:</strong> 1,100°C</p>
                <p><strong>Eruptions:</strong> Frequent small explosions</p>
              </div>
            </section>

            {/* Preparation List */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Preparation List</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><span style={{ color: '#28a745' }}>☑</span> Sturdy hiking boots</p>
                <p><span style={{ color: '#28a745' }}>☑</span> Gas mask (sulfur fumes)</p>
                <p><span style={{ color: '#28a745' }}>☑</span> Headlamp + spare batteries</p>
                <p><span style={{ color: '#28a745' }}>☑</span> Camera with UV filter</p>
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

export default DanakilDepression; 