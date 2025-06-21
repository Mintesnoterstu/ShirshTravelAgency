import React from 'react';
import { Link } from 'react-router-dom';

const AxumDetails = () => {
  console.log('AxumDetails component is rendering!'); // Debug log
  
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
        background: 'linear-gradient(135deg, #2E8B57, #3CB371)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        marginBottom: '2rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Axum - Ethiopia's Ancient Cradle of Civilization
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where Legends of Kings, Queens, and Sacred Arks Come to Life
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2E8B57', fontSize: '1.8rem', marginBottom: '1rem' }}>Step Into 3,000 Years of History</h2>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #2E8B57'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Axum (or Aksum) isn't just another archaeological site—it's the <strong>beating heart of Ethiopia's glorious past</strong>. As the capital of the mighty Aksumite Kingdom (1st–7th century AD), this UNESCO World Heritage Site was once one of the <strong>four great powers of the ancient world</strong>, alongside Rome, Persia, and China. Today, its towering obelisks, underground tombs, and sacred relics whisper tales of a civilization that dominated trade routes from Africa to Asia.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2E8B57', fontSize: '1.8rem', marginBottom: '1rem' }}>✨ Top Experiences in Axum</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#2E8B57', fontSize: '1.4rem', marginBottom: '1rem' }}>1. The Legendary Obelisks</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#2E8B57', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🗿</span>
                <div>
                  <strong>Giant Stone Sentinels</strong>: Marvel at the 1,700-year-old <strong>stelae fields</strong>, where 30-story granite spires (some weighing 160 tons!) mark royal tombs. The tallest standing obelisk reaches <strong>24 meters</strong>—a feat of engineering that still baffles historians.
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#2E8B57', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏛️</span>
                <div>
                  <strong>The Returned Obelisk</strong>: See the <strong>1,700-ton Axum Obelisk</strong>, looted by Mussolini in 1937 and finally repatriated in 2005 after a 68-year exile in Rome.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#2E8B57', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Chapel of the Ark of the Covenant</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#2E8B57', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>⛪</span>
                <div>
                  <strong>Christianity's Holiest Relic?</strong> The <strong>Church of St. Mary of Zion</strong> claims to safeguard the <strong>Ark of the Covenant</strong>—the golden chest holding the original Ten Commandments. Though only a chosen guardian may see it, the chapel's aura is palpable.
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#2E8B57', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🎉</span>
                <div>
                  <strong>Timkat Celebrations</strong>: Visit in January to witness Ethiopia's most vibrant festival, where replicas of the Ark are paraded through the streets.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#2E8B57', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Queen of Sheba's Legacy</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#2E8B57', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👑</span>
                <div>
                  <strong>Her Palace Ruins</strong>: Explore the <strong>Dungur Palace</strong>, widely believed to be the home of the legendary Queen of Sheba (Makeda). Walk through its sunken chambers and imagine her historic meeting with King Solomon.
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#2E8B57', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏊</span>
                <div>
                  <strong>The Queen's Bath</strong>: A massive reservoir still used during Timkat, where locals reenact her famed biblical story.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#2E8B57', fontSize: '1.4rem', marginBottom: '1rem' }}>4. Underground Secrets</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#2E8B57', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>⚰️</span>
                <div>
                  <strong>King Bazen's Tomb</strong>: Descend into a <strong>2,000-year-old royal crypt</strong>, its walls lined with ancient Sabaean inscriptions.
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#2E8B57', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏛️</span>
                <div>
                  <strong>Archaeological Museum</strong>: Admire Aksumite coins, crowns, and the <strong>throne of Emperor Kaleb</strong>—proof of Axum's vast trading empire.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2E8B57', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why Axum Belongs on Your Bucket List</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>UNESCO Wonder</strong> – One of Africa's most significant archaeological sites.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Sacred Energy</strong> – Feel the spiritual weight of the Ark's rumored resting place.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Photographer's Dream</strong> – Sunset over the stelae fields is pure magic.
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Gateway to History</strong> – Pair with Lalibela and Gondar for Ethiopia's "Historic Route."
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2E8B57', fontSize: '1.8rem', marginBottom: '1rem' }}>📅 Practical Travel Tips</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🌤️ Best Time to Visit</h3>
            <p>October–March (cool, dry weather). Avoid July–August rains.</p>
          </div>
          <div>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🏛️ Nearby Gems</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Yeha Temple</strong>: Ethiopia's oldest standing structure (5th century BC).</li>
              <li><strong>Debre Damo Monastery</strong>: Accessible only by rope climb!</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2E8B57', fontSize: '1.8rem', marginBottom: '1rem' }}>🗺️ Suggested Itineraries</h2>
        <div style={{ 
          background: '#fff', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#2E8B57', marginBottom: '0.5rem' }}><strong>1 Day</strong></h4>
              <p>Obelisks, Ark Chapel, Queen's Palace</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#2E8B57', marginBottom: '0.5rem' }}><strong>3 Days</strong></h4>
              <p>Add Yeha, Debre Damo, and local markets</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#2E8B57', marginBottom: '0.5rem' }}><strong>7 Days</strong></h4>
              <p>Combine with Lalibela & Gondar</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #2E8B57, #3CB371)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Ready to Walk with Kings and Queens?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Let Shirsh Travel Agency craft your journey to Axum—where every stone tells a story.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your ancient adventure!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: '#2E8B57',
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

export default AxumDetails; 