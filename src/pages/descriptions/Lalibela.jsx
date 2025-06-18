import React from 'react';
import { Link } from 'react-router-dom';

const Lalibela = () => {
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Lalibela Rock-Hewn Churches</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>The Eighth Wonder of the Ancient World</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Amhara Region, Ethiopia</p>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {/* Historical Significance */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Historical Significance</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                Carved in the 12th-13th centuries under King Lalibela's rule, these 11 monolithic churches represent one of Christianity's most remarkable architectural achievements. The site remains an active pilgrimage center, often called "Africa's Jerusalem."
              </p>
            </section>

            {/* Key Churches */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Key Churches to Visit</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
                  <h3 style={{ color: '#2a5298', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Bete Giyorgis (St. George)</h3>
                  <p>The most iconic, perfectly symmetrical cross-shaped church</p>
                </div>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
                  <h3 style={{ color: '#2a5298', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Bete Medhane Alem</h3>
                  <p>The world's largest monolithic church</p>
                </div>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
                  <h3 style={{ color: '#2a5298', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Bete Maryam</h3>
                  <p>Featuring exquisite carvings and frescoes</p>
                </div>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
                  <h3 style={{ color: '#2a5298', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Underground Tunnel System</h3>
                  <p>Connecting the churches symbolizing spiritual passage</p>
                </div>
              </div>
            </section>

            {/* Unique Experiences */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Unique Experiences</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Attend dawn liturgical ceremonies with chanting priests</li>
                <li>Witness Timkat (Epiphany) celebrations in January</li>
                <li>Nighttime candlelit visits during major festivals</li>
              </ul>
            </section>

            {/* Nearby Attractions */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '2rem', marginBottom: '1rem' }}>Nearby Attractions</h2>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
                <li>Asheton Maryam Monastery (scenic hike)</li>
                <li>Yemrehanna Kristos cave church (45km north)</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Practical Information */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Information</h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <p><strong>Entry Fee:</strong> $50 USD (valid 5 days)</p>
                <p><strong>Best Time to Visit:</strong> October-March (dry season)</p>
                <p><strong>Dress Code:</strong> Modest clothing (shawls available for rent)</p>
                <p><strong>Altitude:</strong> 2,630m - allow time for acclimatization</p>
                <p><strong>Guides:</strong> Mandatory ($15-20/day) - enhances understanding</p>
                <p><strong>Photography:</strong> Permitted (no flash during services)</p>
              </div>
            </section>

            {/* Health & Safety */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Health & Safety</h2>
              <ul style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
                <li>Bring sturdy walking shoes for uneven surfaces</li>
                <li>Carry water and sun protection</li>
                <li>Limited accessibility for mobility-impaired visitors</li>
              </ul>
            </section>

            {/* Recommended Stay */}
            <section style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Recommended Stay</h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>2-3 nights minimum to fully appreciate the site</p>
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

export default Lalibela; 