import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const heroImages = [
  "https://mediaim.expedia.com/destination/1/f4ef6768115c9e926215eb4b875bc42f.jpg",
  // 'https://www.shadowsofafrica.com/media/wysiwyg/Itineraries/Ethiopia_The_Danakil_Depression/Erta_ale_red_lava_lake.jpg',
  // 'https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_374183713.jpg',
  // 'https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_374639497.jpg',
  // 'https://clubrunner.blob.core.windows.net/00000060074/Images/Addis-Ababa-2022.png',
  // 'https://cdn.shortpixel.ai/spai/q_glossy+w_900+to_webp+ret_img/recommend.com/wp-content/uploads/2017/03/ETH_2015_DK_068.jpg',
  // 'https://cdn.shortpixel.ai/spai/q_glossy+w_900+to_webp+ret_img/recommend.com/wp-content/uploads/2017/03/ETH_2015_DK_052.jpg',
  // 'https://media.gettyimages.com/id/1225374767/photo/orthodox-priest-at-abuna-yemata-guh-church-aerial-view-tigray-ethiopia.jpg?s=2048x2048&w=gi&k=20&c=8IYDSPGZu7qdGpPH9wn7VUZriiHyjggPEDJyXqHkYeI=',
  // 'https://media.gettyimages.com/id/1225376184/photo/orthodox-priest-holding-the-hand-cross-abuna-yemata-guh-church-tigray-ethiopia.jpg?s=2048x2048&w=gi&k=20&c=TXBVjkrStHwKQfdrujbG2gwO6IUAoA0simHCErDoBjA='
];

const Home = () => {
  const { currentTheme } = useTheme();
  const [heroIndex, setHeroIndex] = useState(0);
  const heroInterval = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, heroInterval);
    return () => clearInterval(interval);
  }, []);

  // const goToPrev = () => setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  // const goToNext = () => setHeroIndex((prev) => (prev + 1) % heroImages.length);

  const featuredDestinations = [
    {
      name: 'Lalibela',
      image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTvZtzSi574OeohYzn_4OKA3H4zqFy_Y6xLfbmBHKVYoJYIhEmhe3reVb78D13KgUtlFvOQp0vUHU7a8hq4QMBYMZnSfdUwb94gBJeZnrY',
      description: 'Rock-hewn churches, UNESCO World Heritage Site',
      price: '$450',
      link: '/lalibela'
    },
    {
      name: 'Simien Mountains',
      image: 'https://simienpark.org/wp-content/uploads/2017/10/simien-landscape-small.jpg',
      description: 'Dramatic cliffs and rare wildlife',
      price: '$680',
      link: '/simien-mountains'
    },
    {
      name: 'Danakil Depression',
      image: 'https://waltainfo.com/wp-content/uploads/2023/10/Dal9ol.webp',
      description: 'Earth\'s hottest place, volcanoes and salt flats',
      price: '$750',
      link: '/danakil-depression'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      text: 'Amazing experience! The tour guides were knowledgeable and the landscapes were breathtaking.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      country: 'Canada',
      text: 'Ethiopia exceeded all my expectations. The cultural experiences were unforgettable.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      country: 'Spain',
      text: 'Professional service and authentic experiences. Highly recommended!',
      rating: 5
    }
  ];

  const services = [
    {
      icon: '🏔️',
      title: 'Adventure Tours',
      description: 'Trekking, hiking, and outdoor adventures in Ethiopia\'s stunning landscapes'
    },
    {
      icon: '🏛️',
      title: 'Cultural Tours',
      description: 'Explore ancient churches, historical sites, and traditional villages'
    },
    {
      icon: '🦁',
      title: 'Wildlife Tours',
      description: 'Discover Ethiopia\'s unique wildlife and national parks'
    },
    {
      icon: '🏨',
      title: 'Luxury Accommodation',
      description: 'Comfortable stays in carefully selected hotels and lodges'
    }
  ];

  return (
    <div style={{ 
      background: currentTheme.background,
      color: currentTheme.text,
      margin: '0 auto',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, rgba(30,60,114,0.5), rgba(42,82,152,0.5)), url('${heroImages[heroIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '2rem',
        paddingTop: '100px',
        position: 'relative',
        transition: 'background-image 0.7s cubic-bezier(0.4,0,0.3,1)'
      }}>
        
        <div style={{ maxWidth: '800px', background: 'rgba(0,0,0,0.25)', borderRadius: 24, padding: '2.5rem 2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1.5rem',
            fontWeight: '700',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Discover Ethiopia
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            opacity: 0.95
          }}>
            Experience the cradle of humanity, ancient civilizations, and breathtaking landscapes. 
            From the rock-hewn churches of Lalibela to the dramatic Simien Mountains.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/tours" style={{
              background: currentTheme.accent,
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}>
              🗺️ Explore Tours
            </Link>
            <Link to="/about" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              border: '2px solid white',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = currentTheme.primary;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}>
              📖 Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '4rem 2rem',
        background: currentTheme.surface
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: currentTheme.primary
          }}>
            Our Services
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            marginBottom: '3rem',
            opacity: 0.8
          }}>
            We offer comprehensive travel experiences tailored to your preferences
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                background: currentTheme.cardBackground,
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                border: `1px solid ${currentTheme.border}`,
                boxShadow: `0 4px 15px ${currentTheme.shadow}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${currentTheme.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 15px ${currentTheme.shadow}`;
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem',
                  color: currentTheme.primary
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  opacity: 0.8,
                  lineHeight: '1.5'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section style={{
        padding: '4rem 2rem',
        background: currentTheme.background
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: currentTheme.primary
          }}>
            Featured Destinations
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            marginBottom: '3rem',
            opacity: 0.8
          }}>
            Discover Ethiopia's most remarkable places
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {featuredDestinations.map((dest, index) => (
              <Link key={index} to={dest.link} style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{
                  background: currentTheme.cardBackground,
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: `1px solid ${currentTheme.border}`,
                  boxShadow: `0 4px 15px ${currentTheme.shadow}`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 8px 25px ${currentTheme.shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 15px ${currentTheme.shadow}`;
                }}>
                  <div style={{ position: 'relative', height: '200px' }}>
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      {dest.price}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.3rem', 
                      marginBottom: '0.5rem',
                      color: currentTheme.primary
                    }}>
                      {dest.name}
                    </h3>
                    <p style={{ 
                      opacity: 0.8,
                      marginBottom: '1rem'
                    }}>
                      {dest.description}
                    </p>
                    <div style={{
                      color: currentTheme.accent,
                      fontWeight: '600'
                    }}>
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/tours" style={{
              background: currentTheme.accent,
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
            }}>
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '4rem 2rem',
        background: currentTheme.surface
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: currentTheme.primary
          }}>
            What Our Travelers Say
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            marginBottom: '3rem',
            opacity: 0.8
          }}>
            Real experiences from our satisfied customers
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: currentTheme.cardBackground,
                padding: '2rem',
                borderRadius: '15px',
                border: `1px solid ${currentTheme.border}`,
                boxShadow: `0 4px 15px ${currentTheme.shadow}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${currentTheme.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 15px ${currentTheme.shadow}`;
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: currentTheme.accent, fontSize: '1.2rem' }}>⭐</span>
                  ))}
                </div>
                <p style={{ 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <strong style={{ color: currentTheme.primary }}>
                    {testimonial.name}
                  </strong>
                  <span style={{ opacity: 0.7, marginLeft: '0.5rem' }}>
                    from {testimonial.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        padding: '4rem 2rem',
        background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem'
          }}>
            Ready to Explore Ethiopia?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Start planning your unforgettable journey to the cradle of humanity
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
        <Link to="/tours" style={{
              background: 'white',
              color: currentTheme.primary,
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '25px',
          fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
            }}>
              🗺️ Browse Tours
            </Link>
            <Link to="/contact" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              border: '2px solid white',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: '600',
          cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = currentTheme.primary;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}>
              📞 Contact Us
        </Link>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 