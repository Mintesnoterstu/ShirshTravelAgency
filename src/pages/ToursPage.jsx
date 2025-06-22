import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const destinations = [
  {
    name: 'Lalibela - The Rock-Hewn Churches',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTvZtzSi574OeohYzn_4OKA3H4zqFy_Y6xLfbmBHKVYoJYIhEmhe3reVb78D13KgUtlFvOQp0vUHU7a8hq4QMBYMZnSfdUwb94gBJeZnrY',
    short: '11 medieval churches carved from rock. UNESCO World Heritage Site.',
    link: '/lalibela',
    price: '$450',
    duration: '3-4 days',
    tourId: 'lalibela-001',
    category: 'Cultural',
    difficulty: 'Easy',
    region: 'Amhara'
  },
  {
    name: 'Simien Mountains National Park',
    image: 'https://simienpark.org/wp-content/uploads/2017/10/simien-landscape-small.jpg',
    short: 'Dramatic cliffs, deep valleys, rare wildlife. UNESCO site.',
    link: '/simien-mountains',
    price: '$680',
    duration: '5-7 days',
    tourId: 'simien-002',
    category: 'Adventure',
    difficulty: 'Moderate',
    region: 'Amhara'
  },
  {
    name: 'Danakil Depression',
    image: 'https://waltainfo.com/wp-content/uploads/2023/10/Dal9ol.webp',
    short: "Earth's hottest, lowest place. Volcanoes, sulfur springs, salt flats.",
    link: '/danakil-depression',
    price: '$750',
    duration: '4-5 days',
    tourId: 'danakil-003',
    category: 'Adventure',
    difficulty: 'Hard',
    region: 'Afar'
  },
  {
    name: 'Axum - Ancient Kingdom',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/6f/b2/15/from-the-early-4th-century.jpg?w=2000&h=-1&s=1',
    short: 'Heart of ancient Ethiopia. Obelisks, tombs, Ark of the Covenant legend.',
    link: '/axum',
    price: '$380',
    duration: '2-3 days',
    tourId: 'axum-004',
    category: 'Cultural',
    difficulty: 'Easy',
    region: 'Tigray'
  },
  {
    name: 'Gondar - The Camelot of Africa',
    image: 'https://as1.ftcdn.net/v2/jpg/04/81/01/08/1000_F_481010899_hDF8kx3A0TY0alVcbtSszeA8T5msbgaN.jpg',
    short: '17th-century castles and palaces. Fasil Ghebbi, Debre Berhan Selassie.',
    link: '/gondar',
    price: '$420',
    duration: '3-4 days',
    tourId: 'gondar-005',
    category: 'Cultural',
    difficulty: 'Easy',
    region: 'Amhara'
  },
  {
    name: 'Omo Valley - Cultural Mosaic',
    image: 'https://images.ctfassets.net/27l0lnvdn7un/6xgRuCaom50bqAhPQNMS9q/c1d7e1240090e34e7797d4d9715f16f5/20231109_091304.jpg?fm=webp&w=3840&q=75',
    short: 'Home to many indigenous tribes. Unique cultures and ceremonies.',
    link: '/omo-valley',
    price: '$580',
    duration: '6-8 days',
    tourId: 'omo-006',
    category: 'Cultural',
    difficulty: 'Moderate',
    region: 'SNNPR'
  },
  {
    name: 'Bale Mountains National Park',
    image: 'https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_1950133336.jpg',
    short: 'Afro-alpine meadows, cloud forests, Ethiopian wolves.',
    link: '/bale-mountains',
    price: '$520',
    duration: '4-5 days',
    tourId: 'bale-007',
    category: 'Wildlife',
    difficulty: 'Moderate',
    region: 'Oromia'
  },
  {
    name: 'Harar - Walled City',
    image: 'https://www.ethiosports.com/wp-content/uploads/2015/07/Harar-Wall.jpg',
    short: 'Ancient walled city. 82 mosques, hyena feeding tradition.',
    link: '/harar',
    price: '$350',
    duration: '2-3 days',
    tourId: 'harar-008',
    category: 'Cultural',
    difficulty: 'Easy',
    region: 'Harari'
  },
  {
    name: 'Blue Nile Falls (Tis Issat)',
    image: 'https://sabisatour.com/wp-content/uploads/2022/12/Blue_Nile_Falls-2-960x636.jpg',
    short: 'Dramatic falls on the Blue Nile. Best in rainy season.',
    link: '/blue-nile-falls',
    price: '$280',
    duration: '1-2 days',
    tourId: 'blue-nile-009',
    category: 'Nature',
    difficulty: 'Easy',
    region: 'Amhara'
  },
  {
    name: 'Tiya Megaliths',
    image: 'https://www.ancient-origins.net/sites/default/files/styles/article_image/public/field/image/Tiya-Stones-monoliths-Ethiopia.jpg?itok=7ahIWyXR',
    short: 'UNESCO site. Mysterious ancient stelae with carvings.',
    link: '/tiya',
    price: '$220',
    duration: '1 day',
    tourId: 'tiya-010',
    category: 'Cultural',
    difficulty: 'Easy',
    region: 'Oromia'
  },
  {
    name: 'National Museum of Ethiopia (Addis Ababa)',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b9/09/c9/national-museum.jpg?w=2000&h=-1&s=1',
    short: 'Home of "Lucy". Royal regalia, ancient relics, ethnographic treasures.',
    link: '/national-museum',
    price: '$150',
    duration: '1 day',
    tourId: 'museum-011',
    category: 'Cultural',
    difficulty: 'Easy',
    region: 'Addis Ababa'
  },
  {
    name: 'Abuna Yemata Guh (Tigray)',
    image: 'https://images.westend61.de/0001440020pw/priest-holding-the-hand-cross-on-rocks-outside-abuna-yemata-guh-church-gheralta-mountains-tigray-region-ethiopia-africa-RHPLF17382.jpg',
    short: 'Cliff church. 6th-century. Epic climb, ancient frescoes, Gheralta views.',
    link: '/abuna-yemata-guh',
    price: '$320',
    duration: '2-3 days',
    tourId: 'abuna-012',
    category: 'Cultural',
    difficulty: 'Hard',
    region: 'Tigray'
  },
];

const ToursPage = () => {
  const { currentTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [region, setRegion] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleBookNow = (destination) => {
    // Store destination data in sessionStorage for the booking page
    sessionStorage.setItem('bookingData', JSON.stringify({
      tourId: destination.tourId,
      name: destination.name,
      price: destination.price,
      duration: destination.duration,
      image: destination.image,
      description: destination.short
    }));
  };

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    let filtered = destinations.filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           dest.short.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPrice = !priceRange || (() => {
        const price = parseInt(dest.price.replace('$', ''));
        switch(priceRange) {
          case 'under-300': return price < 300;
          case '300-500': return price >= 300 && price <= 500;
          case '500-700': return price > 500 && price <= 700;
          case 'over-700': return price > 700;
          default: return true;
        }
      })();
      
      const matchesDuration = !duration || dest.duration.includes(duration);
      const matchesCategory = !category || dest.category === category;
      const matchesDifficulty = !difficulty || dest.difficulty === difficulty;
      const matchesRegion = !region || dest.region === region;
      
      return matchesSearch && matchesPrice && matchesDuration && matchesCategory && matchesDifficulty && matchesRegion;
    });

    // Sort destinations
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
        case 'price-high':
          return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
        case 'duration':
          return a.duration.localeCompare(b.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, priceRange, duration, category, difficulty, region, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange('');
    setDuration('');
    setCategory('');
    setDifficulty('');
    setRegion('');
    setSortBy('name');
  };

  return (
    <div style={{ 
      paddingTop: '80px', 
      background: currentTheme.background, 
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    }}>
      <section style={{
        background: `linear-gradient(rgba(30,60,114,0.8), rgba(42,82,152,0.8))`,
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ethiopia's Top Destinations</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto', opacity: 0.95 }}>
          Explore the most remarkable places in Ethiopia. Use our search filters to find your perfect tour.
        </p>
      </section>

      {/* Search and Filter Section */}
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 2rem 2rem 2rem'
      }}>
        <div style={{
          background: currentTheme.surface,
          padding: '2rem',
          borderRadius: '20px',
          border: `1px solid ${currentTheme.border}`,
          boxShadow: `0 4px 15px ${currentTheme.shadow}`,
          marginBottom: '2rem'
        }}>
          <h2 style={{ 
            color: currentTheme.primary, 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            🔍 Search & Filter Tours
          </h2>
          
          {/* Search Bar */}
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="text"
              placeholder="Search by destination name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                border: `1px solid ${currentTheme.border}`,
                borderRadius: '10px',
                fontSize: '1rem',
                backgroundColor: currentTheme.background,
                color: currentTheme.text
              }}
            />
          </div>

          {/* Filter Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            {/* Price Range */}
            <div>
              <label style={{
                display: 'block',
                color: currentTheme.text,
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                💰 Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '8px',
                  backgroundColor: currentTheme.background,
                  color: currentTheme.text,
                  fontSize: '0.9rem'
                }}
              >
                <option value="">All Prices</option>
                <option value="under-300">Under $300</option>
                <option value="300-500">$300 - $500</option>
                <option value="500-700">$500 - $700</option>
                <option value="over-700">Over $700</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label style={{
                display: 'block',
                color: currentTheme.text,
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                ⏱️ Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '8px',
                  backgroundColor: currentTheme.background,
                  color: currentTheme.text,
                  fontSize: '0.9rem'
                }}
              >
                <option value="">All Durations</option>
                <option value="1 day">1 Day</option>
                <option value="2-3 days">2-3 Days</option>
                <option value="3-4 days">3-4 Days</option>
                <option value="4-5 days">4-5 Days</option>
                <option value="5-7 days">5-7 Days</option>
                <option value="6-8 days">6-8 Days</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label style={{
                display: 'block',
                color: currentTheme.text,
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                🏷️ Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '8px',
                  backgroundColor: currentTheme.background,
                  color: currentTheme.text,
                  fontSize: '0.9rem'
                }}
              >
                <option value="">All Categories</option>
                <option value="Cultural">Cultural</option>
                <option value="Adventure">Adventure</option>
                <option value="Wildlife">Wildlife</option>
                <option value="Nature">Nature</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label style={{
                display: 'block',
                color: currentTheme.text,
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                🏃 Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '8px',
                  backgroundColor: currentTheme.background,
                  color: currentTheme.text,
                  fontSize: '0.9rem'
                }}
              >
                <option value="">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Region */}
            <div>
              <label style={{
                display: 'block',
                color: currentTheme.text,
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                🗺️ Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '8px',
                  backgroundColor: currentTheme.background,
                  color: currentTheme.text,
                  fontSize: '0.9rem'
                }}
              >
                <option value="">All Regions</option>
                <option value="Amhara">Amhara</option>
                <option value="Tigray">Tigray</option>
                <option value="Oromia">Oromia</option>
                <option value="SNNPR">SNNPR</option>
                <option value="Afar">Afar</option>
                <option value="Harari">Harari</option>
                <option value="Addis Ababa">Addis Ababa</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label style={{
                display: 'block',
                color: currentTheme.text,
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                📊 Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '8px',
                  backgroundColor: currentTheme.background,
                  color: currentTheme.text,
                  fontSize: '0.9rem'
                }}
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>

          {/* Results and Clear Filters */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ color: currentTheme.text }}>
              <strong>{filteredDestinations.length}</strong> tours found
            </div>
            <button
              onClick={clearFilters}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'transparent',
                color: currentTheme.primary,
                border: `1px solid ${currentTheme.primary}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = currentTheme.primary;
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = currentTheme.primary;
              }}
            >
              🗑️ Clear All Filters
            </button>
          </div>
        </div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {filteredDestinations.map((dest) => (
          <div 
            key={dest.tourId}
            style={{
              background: currentTheme.cardBackground,
              borderRadius: '15px',
              boxShadow: `0 4px 16px ${currentTheme.shadow}`,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              border: `1px solid ${currentTheme.border}`,
              height: '420px',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 8px 25px ${currentTheme.shadow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 16px ${currentTheme.shadow}`;
            }}
          >
            {/* Image Section */}
            <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
              <img 
                src={dest.image} 
                alt={dest.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '0.4rem 0.8rem',
                borderRadius: '15px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                {dest.price}
              </div>
              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                background: currentTheme.accent,
                color: 'white',
                padding: '0.3rem 0.6rem',
                borderRadius: '10px',
                fontSize: '0.7rem',
                fontWeight: '600'
              }}>
                {dest.category}
              </div>
            </div>

            {/* Content Section */}
            <div style={{ 
              padding: '1.25rem',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {/* Title and Description */}
              <div>
                <h2 style={{ 
                  color: currentTheme.primary, 
                  fontSize: '1.2rem', 
                  marginBottom: '0.5rem',
                  lineHeight: '1.3',
                  fontWeight: '600',
                  minHeight: '2.4rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {dest.name}
                </h2>
                
                <p style={{ 
                  color: currentTheme.text, 
                  fontSize: '0.9rem',
                  lineHeight: '1.4',
                  marginBottom: '1rem',
                  opacity: 0.8,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  minHeight: '2.5rem'
                }}>
                  {dest.short}
                </p>

                {/* Info Badges */}
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'inline-block',
                    background: currentTheme.accent,
                    color: 'white',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    ⏱️ {dest.duration}
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: currentTheme.primary,
                    color: 'white',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    🏃 {dest.difficulty}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginTop: 'auto'
              }}>
                <Link 
                  to={dest.link} 
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: 'transparent',
                    color: currentTheme.primary,
                    border: `2px solid ${currentTheme.primary}`,
                    borderRadius: '8px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = currentTheme.primary;
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = currentTheme.primary;
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  📖 Learn More
                </Link>
                
                <Link 
                  to="/booking" 
                  onClick={() => handleBookNow(dest)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: currentTheme.accent,
                    color: 'white',
                    border: `2px solid ${currentTheme.accent}`,
                    borderRadius: '8px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = currentTheme.accent;
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = currentTheme.accent;
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  ✈️ Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredDestinations.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          color: currentTheme.text
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: currentTheme.primary }}>
            No tours found
          </h3>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
            Try adjusting your search criteria or clear all filters to see all available tours.
          </p>
          <button
            onClick={clearFilters}
            style={{
              padding: '1rem 2rem',
              backgroundColor: currentTheme.accent,
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Show All Tours
          </button>
        </div>
      )}
    </div>
  );
};

export default ToursPage; 