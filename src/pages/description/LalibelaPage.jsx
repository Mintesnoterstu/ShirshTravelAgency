import React from 'react';
import { Link } from 'react-router-dom';

const LalibelaPage = () => {
  return (
    <div style={{ paddingTop: '80px', background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTvZtzSi574OeohYzn_4OKA3H4zqFy_Y6xLfbmBHKVYoJYIhEmhe3reVb78D13KgUtlFvOQp0vUHU7a8hq4QMBYMZnSfdUwb94gBJeZnrY")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Lalibela Rock-Hewn Churches</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: 800, margin: '0 auto' }}>
          The Eighth Wonder of the Ancient World - 11 monolithic churches carved from solid rock
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
        
        {/* Historical Significance */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Historical Significance</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}>
            Carved in the 12th-13th centuries under King Lalibela's rule, these 11 monolithic churches represent one of Christianity's most remarkable architectural achievements. The site remains an active pilgrimage center, often called "Africa's Jerusalem."
          </p>
        </section>

        {/* Key Churches */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Key Churches to Visit</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Bete Giyorgis (St. George)</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>The most iconic, perfectly symmetrical cross-shaped church, carved in the shape of a cross and standing in a deep pit.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Bete Medhane Alem</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>The world's largest monolithic church, measuring 33.5 meters long, 23.5 meters wide, and 11.5 meters high.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Bete Maryam</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Featuring exquisite carvings and frescoes, this church is known for its beautiful interior decorations.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Underground Tunnel System</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Connecting the churches symbolizing spiritual passage, these tunnels create a network between the sacred sites.</p>
            </div>
          </div>
        </section>

        {/* Unique Experiences */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Unique Experiences</h2>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}>
              <li>Attend dawn liturgical ceremonies with chanting priests</li>
              <li>Witness Timkat (Epiphany) celebrations in January</li>
              <li>Nighttime candlelit visits during major festivals</li>
              <li>Experience traditional Ethiopian Orthodox worship</li>
              <li>Meet local priests and learn about church history</li>
            </ul>
          </div>
        </section>

        {/* Practical Information */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Practical Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Entry Fee</h4>
              <p style={{ color: '#666' }}>$50 USD (valid 5 days)</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Best Time to Visit</h4>
              <p style={{ color: '#666' }}>October-March (dry season)</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Altitude</h4>
              <p style={{ color: '#666' }}>2,630m - allow time for acclimatization</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#1e3c72', marginBottom: '0.5rem' }}>Guides</h4>
              <p style={{ color: '#666' }}>Mandatory ($15-20/day) - enhances understanding</p>
            </div>
          </div>
        </section>

        {/* Health & Safety */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Health & Safety</h2>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}>
              <li>Bring sturdy walking shoes for uneven surfaces</li>
              <li>Carry water and sun protection</li>
              <li>Limited accessibility for mobility-impaired visitors</li>
              <li>Dress modestly - shawls available for rent</li>
              <li>Photography permitted (no flash during services)</li>
            </ul>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Nearby Attractions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Asheton Maryam Monastery</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>A scenic hike to this ancient monastery offers breathtaking views of the surrounding landscape.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: '1rem' }}>Yemrehanna Kristos</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>A cave church located 45km north of Lalibela, featuring beautiful wooden architecture and frescoes.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Experience Lalibela?</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
            Recommended stay: 2-3 nights minimum to fully appreciate the site
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
            Book Your Lalibela Tour
          </Link>
        </section>
      </div>
    </div>
  );
};

export default LalibelaPage; 