import React from 'react';
import { Link } from 'react-router-dom';

const SimienMountainsDetails = () => {
  console.log('SimienMountainsDetails component is rendering!'); // Debug log
  
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
        background: 'linear-gradient(135deg, #228B22, #32CD32)', 
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
          Simien Mountains - Africa's Grandest Highlands
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Where Jagged Peaks Touch the Sky and Rare Wildlife Roams Free
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>The Roof of Africa Awaits</h2>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '10px',
          borderLeft: '4px solid #228B22'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Prepare to have your breath stolen - literally and figuratively - in Ethiopia's <strong>Simien Mountains National Park</strong>, a UNESCO World Heritage Site often called "Africa's Grand Canyon." This otherworldly landscape of <strong>dramatic escarpments, sheer cliffs, and rolling highland plateaus</strong> plunges down nearly 1,500 meters in places, creating one of the continent's most spectacular trekking destinations. Home to <strong>endemic wildlife, traditional villages, and some of the continent's most breathtaking vistas</strong>, the Simiens offer an adventure that's both physically challenging and spiritually uplifting.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>✨ Top Experiences in the Simien Mountains</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#228B22', fontSize: '1.4rem', marginBottom: '1rem' }}>1. Trekking Through Cloud Kingdoms</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏔️</span>
                <div>
                  <strong>Ras Dashen Summit</strong>: Conquer Ethiopia's highest peak at <strong>4,543 meters</strong> on a multi-day expedition
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👁️</span>
                <div>
                  <strong>Geech to Imet Gogo</strong>: The park's signature hike leads to <strong>360-degree viewpoints</strong> over 100km of jagged peaks
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🦅</span>
                <div>
                  <strong>Sankaber to Chenek</strong>: Spot wildlife while traversing <strong>clifftop trails</strong> with 800m drops
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#228B22', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Wildlife Encounters You Can't Find Elsewhere</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐒</span>
                <div>
                  <strong>Gelada Monkeys</strong>: Observe hundreds of these "bleeding-heart baboons" as they <strong>socialize on cliff edges</strong>
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐺</span>
                <div>
                  <strong>Ethiopian Wolves</strong>: The world's rarest canid hunts rodents on the <strong>Sanetti Plateau</strong>
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🐐</span>
                <div>
                  <strong>Walia Ibex</strong>: See this endangered mountain goat <strong>scale near-vertical cliffs</strong> with supernatural ease
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#228B22', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Cultural Connections</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🏘️</span>
                <div>
                  <strong>Village of Geech</strong>: Experience traditional <strong>Tigrayan hospitality</strong> in stone huts
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👥</span>
                <div>
                  <strong>Local Guides</strong>: Hear stories of the mountains from <strong>born-and-raised Simien experts</strong>
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌙</span>
                <div>
                  <strong>Full Moon Trekking</strong>: Join rare <strong>night hikes</strong> when the lunar landscape glows silver
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#228B22', fontSize: '1.4rem', marginBottom: '1rem' }}>4. Jaw-Dropping Viewpoints</h3>
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>👁️</span>
                <div>
                  <strong>Imet Gogo</strong>: The park's most famous <strong>360° panorama</strong> at 3,926m
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>💧</span>
                <div>
                  <strong>Jinbar Waterfall</strong>: Watch the river plunge <strong>500m into the abyss</strong>
                </div>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#228B22', marginRight: '10px', fontSize: '1.2rem', marginTop: '2px' }}>🌅</span>
                <div>
                  <strong>Arkuasye Pass</strong>: Sunrise here paints the <strong>entire range gold</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>🌍 Why the Simiens Belong on Your Bucket List</h2>
        <div style={{ 
          background: '#e8f5e8', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #28a745'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>UNESCO World Heritage Site</strong> – Recognized for both natural beauty and biodiversity
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Rare Wildlife</strong> – Three endemic species found nowhere else on Earth
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Trekking Variety</strong> – From gentle day hikes to 12-day expeditions
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Cool Climate</strong> – Pleasant 10-20°C temperatures year-round at high altitudes
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
              <strong>Cultural Immersion</strong> – Meet farmers who've lived here for generations
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>📅 Practical Travel Tips</h2>
        <div style={{ 
          background: '#fff3cd', 
          padding: '1.5rem', 
          borderRadius: '10px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🌤️ Best Time to Visit</h3>
            <p>October-March (dry season; best views)</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🎒 Essential Gear</h3>
            <p>Sturdy boots, warm layers (nights get cold), and altitude medication</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>✈️ Access Points</h3>
            <p>Fly to Gondar, then 2-hour drive to Debark (park HQ)</p>
          </div>
          <div>
            <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>📋 Permits Required</h3>
            <p>Must be arranged through licensed tour operators</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#228B22', fontSize: '1.8rem', marginBottom: '1rem' }}>🗺️ Suggested Itineraries</h2>
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
              <h4 style={{ color: '#228B22', marginBottom: '0.5rem' }}><strong>1 Day</strong></h4>
              <p style={{ marginBottom: '0.5rem' }}>Beginner</p>
              <p>Sankaber to Geech (light trek + gelada monkeys)</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#228B22', marginBottom: '0.5rem' }}><strong>3 Days</strong></h4>
              <p style={{ marginBottom: '0.5rem' }}>Intermediate</p>
              <p>Chenek via Geech (ibex spotting + Imet Gogo)</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#228B22', marginBottom: '0.5rem' }}><strong>7+ Days</strong></h4>
              <p style={{ marginBottom: '0.5rem' }}>Advanced</p>
              <p>Ras Dashen summit + remote northern valleys</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #228B22, #32CD32)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Ready to Walk on the Roof of Africa?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <em>Let Shirsh Travel Agency craft your perfect Simien Mountains adventure - from gentle nature walks to epic summit challenges.</em>
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
          📞 Contact us today to book your highland expedition!
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/tours" style={{
          background: '#228B22',
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

export default SimienMountainsDetails; 