import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const destinations = [
  {
    name: 'Lalibela - The Rock-Hewn Churches',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTvZtzSi574OeohYzn_4OKA3H4zqFy_Y6xLfbmBHKVYoJYIhEmhe3reVb78D13KgUtlFvOQp0vUHU7a8hq4QMBYMZnSfdUwb94gBJeZnrY',
    short: '11 medieval churches carved from rock. UNESCO World Heritage Site.',
    link: '/lalibela'
  },
  {
    name: 'Simien Mountains National Park',
    image: 'https://simienpark.org/wp-content/uploads/2017/10/simien-landscape-small.jpg',
    short: 'Dramatic cliffs, deep valleys, rare wildlife. UNESCO site.',
    link: '/simien-mountains'
  },
  {
    name: 'Danakil Depression',
    image: 'https://waltainfo.com/wp-content/uploads/2023/10/Dal9ol.webp',
    short: "Earth's hottest, lowest place. Volcanoes, sulfur springs, salt flats.",
    link: '/danakil-depression'
  },
  {
    name: 'Axum - Ancient Kingdom',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/6f/b2/15/from-the-early-4th-century.jpg?w=2000&h=-1&s=1',
    short: 'Heart of ancient Ethiopia. Obelisks, tombs, Ark of the Covenant legend.',
    link: '/axum'
  },
  {
    name: 'Gondar - The Camelot of Africa',
    image: 'https://as1.ftcdn.net/v2/jpg/04/81/01/08/1000_F_481010899_hDF8kx3A0TY0alVcbtSszeA8T5msbgaN.jpg',
    short: '17th-century castles and palaces. Fasil Ghebbi, Debre Berhan Selassie.',
    link: '/gondar'
  },
  {
    name: 'Omo Valley - Cultural Mosaic',
    image: 'https://images.ctfassets.net/27l0lnvdn7un/6xgRuCaom50bqAhPQNMS9q/c1d7e1240090e34e7797d4d9715f16f5/20231109_091304.jpg?fm=webp&w=3840&q=75',
    short: 'Home to many indigenous tribes. Unique cultures and ceremonies.',
    link: '/omo-valley'
  },
  {
    name: 'Bale Mountains National Park',
    image: 'https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_1950133336.jpg',
    short: 'Afro-alpine meadows, cloud forests, Ethiopian wolves.',
    link: '/bale-mountains'
  },
  {
    name: 'Harar - Walled City',
    image: 'https://www.ethiosports.com/wp-content/uploads/2015/07/Harar-Wall.jpg',
    short: 'Ancient walled city. 82 mosques, hyena feeding tradition.',
    link: '/harar'
  },
  {
    name: 'Blue Nile Falls (Tis Issat)',
    image: 'https://sabisatour.com/wp-content/uploads/2022/12/Blue_Nile_Falls-2-960x636.jpg',
    short: 'Dramatic falls on the Blue Nile. Best in rainy season.',
    link: '/blue-nile-falls'
  },
  {
    name: 'Tiya Megaliths',
    image: 'https://www.ancient-origins.net/sites/default/files/styles/article_image/public/field/image/Tiya-Stones-monoliths-Ethiopia.jpg?itok=7ahIWyXR',
    short: 'UNESCO site. Mysterious ancient stelae with carvings.',
    link: '/tiya'
  },
  {
    name: 'National Museum of Ethiopia (Addis Ababa)',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b9/09/c9/national-museum.jpg?w=2000&h=-1&s=1',
    short: 'Home of "Lucy". Royal regalia, ancient relics, ethnographic treasures.',
    link: '/national-museum'
  },
  {
    name: 'Abuna Yemata Guh (Tigray)',
    image: 'https://images.westend61.de/0001440020pw/priest-holding-the-hand-cross-on-rocks-outside-abuna-yemata-guh-church-gheralta-mountains-tigray-region-ethiopia-africa-RHPLF17382.jpg',
    short: 'Cliff church. 6th-century. Epic climb, ancient frescoes, Gheralta views.',
    link: '/abuna-yemata-guh'
  },
];

const ToursPage = () => {
  const { currentTheme } = useTheme();

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
          Explore the most remarkable places in Ethiopia. Click on destinations to learn more about their history, culture, and natural wonders.
        </p>
      </section>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {destinations.map((dest) => {
          const CardContent = (
            <div style={{
              background: currentTheme.cardBackground,
              borderRadius: 20,
              boxShadow: `0 4px 16px ${currentTheme.shadow}`,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              position: 'relative',
              cursor: dest.link ? 'pointer' : 'default',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              border: `1px solid ${currentTheme.border}`
            }} onMouseEnter={(e) => {
              if (dest.link) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${currentTheme.shadow}`;
              }
            }} onMouseLeave={(e) => {
              if (dest.link) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 16px ${currentTheme.shadow}`;
              }
            }}>
              <img src={dest.image} alt={dest.name} style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover',
                flexShrink: 0
              }} />
              <div style={{ 
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h2 style={{ 
                    color: currentTheme.primary, 
                    fontSize: '1.3rem', 
                    marginBottom: 8,
                    lineHeight: '1.3',
                    minHeight: '2.6rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>{dest.name}</h2>
                  <p style={{ 
                    color: currentTheme.text, 
                    fontSize: '1rem',
                    lineHeight: '1.4',
                    minHeight: '2.8rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                    opacity: 0.8
                  }}>{dest.short}</p>
                </div>
                {dest.link && (
                  <span style={{ 
                    color: currentTheme.accent, 
                    fontWeight: 500, 
                    fontSize: 14,
                    marginTop: 'auto'
                  }}>Click for more →</span>
                )}
              </div>
            </div>
          );

          return dest.link ? (
            <Link key={dest.name} to={dest.link} style={{ textDecoration: 'none' }}>
              {CardContent}
            </Link>
          ) : (
            <div key={dest.name}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToursPage; 