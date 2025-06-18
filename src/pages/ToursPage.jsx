import React, { useState } from 'react';

const ToursPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const tours = [
    {
      id: 1,
      title: "Historic Northern Ethiopia",
      description: "Explore the ancient churches of Lalibela, the castles of Gondar, and the monasteries of Lake Tana.",
      duration: "7 days",
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      type: "popular"
    },
    {
      id: 2,
      title: "Southern Ethiopia Cultural Tour",
      description: "Discover the diverse cultures of the Omo Valley, home to unique tribes and traditions.",
      duration: "10 days",
      price: "$1,800",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      type: "new"
    },
    {
      id: 3,
      title: "Addis Ababa City Tour",
      description: "Experience the vibrant capital city with its museums, markets, and cultural sites.",
      duration: "1 day",
      price: "$150",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      type: "standard"
    },
    {
      id: 4,
      title: "Danakil Depression Adventure",
      description: "Journey to one of the hottest places on Earth with its colorful sulfur springs and salt flats.",
      duration: "5 days",
      price: "$900",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      type: "adventure"
    }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = !selectedDuration || tour.duration.includes(selectedDuration);
    const matchesPrice = !selectedPrice || tour.price <= selectedPrice;
    
    return matchesSearch && matchesDuration && matchesPrice;
  });

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Tours</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
          Discover the wonders of Ethiopia with our carefully curated tours
        </p>
      </section>

      {/* Content Section */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Filters Section */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            marginBottom: '3rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '1.5rem' }}>Filter Tours</h3>
            
            {/* Search Bar */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <input
                type="text"
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  padding: '1rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '10px',
                  fontSize: '1rem'
                }}
              />
            </div>

            {/* Filter Options */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem' 
            }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1e3c72', fontWeight: 500 }}>
                  Duration
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e9ecef',
                    borderRadius: '10px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">All Durations</option>
                  <option value="1">1 Day</option>
                  <option value="5">5 Days</option>
                  <option value="7">7 Days</option>
                  <option value="10">10 Days</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1e3c72', fontWeight: 500 }}>
                  Price Range
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e9ecef',
                    borderRadius: '10px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">All Prices</option>
                  <option value="200">Under $200</option>
                  <option value="500">Under $500</option>
                  <option value="1000">Under $1000</option>
                  <option value="2000">Under $2000</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tours Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {filteredTours.map(tour => (
              <div key={tour.id} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid #eee'
              }}>
                <div style={{
                  height: '250px',
                  background: `url(${tour.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: tour.type === 'popular' ? '#ffd700' : tour.type === 'new' ? '#28a745' : '#dc3545',
                    color: tour.type === 'popular' ? '#1e3c72' : 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {tour.type.toUpperCase()}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#1e3c72', marginBottom: '0.5rem' }}>
                    {tour.title}
                  </h3>
                  <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {tour.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ color: '#1e3c72', fontWeight: 500 }}>⭐ {tour.rating}</span>
                    <span style={{ color: '#666' }}>⏱️ {tour.duration}</span>
                    <span style={{ color: '#666' }}>👥 Group Tour</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3c72' }}>
                      {tour.price}
                    </span>
                    <button style={{
                      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToursPage; 