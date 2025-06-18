import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: 'Lalibela - The Rock-Hewn Churches',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTvZtzSi574OeohYzn_4OKA3H4zqFy_Y6xLfbmBHKVYoJYIhEmhe3reVb78D13KgUtlFvOQp0vUHU7a8hq4QMBYMZnSfdUwb94gBJeZnrY',
    short: 'The Eighth Wonder of the Ancient World. 11 monolithic churches, pilgrimage center, Africa\'s Jerusalem.',
    full: `Carved in the 12th-13th centuries under King Lalibela\'s rule, these 11 monolithic churches represent one of Christianity\'s most remarkable architectural achievements. The site remains an active pilgrimage center, often called "Africa's Jerusalem."

Key Churches: Bete Giyorgis (St. George), Bete Medhane Alem, Bete Maryam, and an underground tunnel system. Unique experiences include dawn liturgical ceremonies, Timkat celebrations, and candlelit visits during festivals. Entry: $50 (valid 5 days). Best: Oct-Mar. Altitude: 2,630m. Guides mandatory. Dress modestly. Recommended stay: 2-3 nights.`,
    link: '/lalibela',
  },
  {
    name: 'Simien Mountains National Park',
    image: 'https://simienpark.org/wp-content/uploads/2017/10/simien-landscape-small.jpg',
    short: 'Dramatic cliffs, deep valleys, rare wildlife. UNESCO site.',
    full: `Often called "Africa's Grand Canyon," this UNESCO site features dramatic cliffs, deep valleys, and rare wildlife like the Gelada baboon and Ethiopian wolf. The park is a trekker's paradise, with breathtaking views and unique flora and fauna found nowhere else on earth.`
  },
  {
    name: 'Danakil Depression',
    image: 'https://waltainfo.com/wp-content/uploads/2023/10/Dal9ol.webp',
    short: "Earth's hottest, lowest place. Volcanoes, sulfur springs, salt flats.",
    full: `One of Earth's hottest and lowest places, featuring active volcanoes, colorful sulfur springs, and salt flats where Afar people still practice traditional salt mining. The Danakil is a surreal, otherworldly landscape, and a true adventure for intrepid travelers.`
  },
  {
    name: 'Axum - Ancient Kingdom',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/6f/b2/15/from-the-early-4th-century.jpg?w=2000&h=-1&s=1',
    short: 'Cradle of Ethiopian Civilization. Obelisks, Ark of the Covenant, ancient ruins.',
    full: `Capital of the ancient Axumite Kingdom (1st-7th century AD), once a major trading power rivaling Rome and Persia. Believed by many to house the Ark of the Covenant.

Must-see: Stelae Field, Queen of Sheba\'s Palace, King Ezana\'s Inscription, St. Mary of Zion Church, Chapel of the Tablet. Entry: $10-20/site. Best: Nov-Feb. Local guides recommended. Dress code at religious sites. Recommended stay: 2 days.`,
    link: '/axum',
  },
  {
    name: 'Gondar - The Camelot of Africa',
    image: 'https://as1.ftcdn.net/v2/jpg/04/81/01/08/1000_F_481010899_hDF8kx3A0TY0alVcbtSszeA8T5msbgaN.jpg',
    short: '17th-century castles and palaces. Fasil Ghebbi, Debre Berhan Selassie.',
    full: `Features 17th-century castles and palaces from the Gondarine dynasty, including Fasil Ghebbi (a UNESCO site) and the famous Debre Berhan Selassie church with its angel-covered ceiling. Gondar is known for its Timkat festival and royal history.`
  },
  {
    name: 'Omo Valley - Cultural Mosaic',
    image: 'https://images.ctfassets.net/27l0lnvdn7un/6xgRuCaom50bqAhPQNMS9q/c1d7e1240090e34e7797d4d9715f16f5/20231109_091304.jpg?fm=webp&w=3840&q=75',
    short: 'Home to many indigenous tribes. Unique cultures and ceremonies.',
    full: `Home to numerous indigenous tribes like the Mursi, Hamer, and Karo, known for their unique body painting, lip plates, and traditional ceremonies. The Omo Valley is a living museum of Africa's cultural diversity.`
  },
  {
    name: 'Bale Mountains National Park',
    image: 'https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_1950133336.jpg',
    short: 'Afro-alpine meadows, cloud forests, Ethiopian wolves.',
    full: `High-altitude wilderness with Afro-alpine meadows, cloud forests, and the largest population of Ethiopian wolves. Excellent for trekking, horseback riding, and wildlife viewing. The Harenna Forest is a biodiversity hotspot.`
  },
  {
    name: 'Harar - Walled City',
    image: 'https://www.ethiosports.com/wp-content/uploads/2015/07/Harar-Wall.jpg',
    short: 'Ancient walled city. 82 mosques, hyena feeding tradition.',
    full: `A UNESCO-listed ancient walled city with 82 mosques, colorful markets, and unique tradition of wild hyena feeding at night. Harar is considered the fourth holiest city in Islam and is famous for its vibrant alleyways and coffee culture.`
  },
  {
    name: 'Blue Nile Falls (Tis Issat)',
    image: 'https://sabisatour.com/wp-content/uploads/2022/12/Blue_Nile_Falls-2-960x636.jpg',
    short: 'Dramatic falls on the Blue Nile. Best in rainy season.',
    full: `Known as "The Smoking Water," these dramatic falls on the Blue Nile are most impressive during the rainy season (June-September). The surrounding area is lush and green, perfect for hiking and birdwatching.`
  },
  {
    name: 'Tiya Megaliths',
    image: 'https://www.ancient-origins.net/sites/default/files/styles/article_image/public/field/image/Tiya-Stones-monoliths-Ethiopia.jpg?itok=7ahIWyXR',
    short: 'UNESCO site. Mysterious ancient stelae with carvings.',
    full: `A UNESCO site featuring mysterious ancient stelae (standing stones) with carvings, dating back to the 12th-14th centuries. The Tiya stones mark ancient burial grounds and are one of Ethiopia's most enigmatic archaeological sites.`
  },
  {
    name: 'National Museum of Ethiopia (Addis Ababa)',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b9/09/c9/national-museum.jpg?w=2000&h=-1&s=1', // TripAdvisor image
    short: 'Home of "Lucy". Royal regalia, ancient relics, ethnographic treasures.',
    full: `Highlights:\n\n- Lucy Gallery: Home to "Lucy" (3.2 million-year-old hominid skeleton)\n- Royal Regalia: Coronation artifacts of Emperor Haile Selassie\n- Relic Collection: Ancient Axumite and medieval church treasures\n- Ethnographic Display: Traditional crafts from all Ethiopian regions\n\nVisitor Info:\n📍 Location: King George VI Street, Addis Ababa\n⏰ Hours: 8:30AM-5:30PM daily\n💰 Entrance: ~200 ETB (foreign adults)\n\nTip: Combine your visit with nearby attractions like Merkato market and Holy Trinity Cathedral. The museum is a must for history lovers and school groups!`
  },
  {
    name: 'Abuna Yemata Guh (Tigray)',
    image: 'https://images.westend61.de/0001440020pw/priest-holding-the-hand-cross-on-rocks-outside-abuna-yemata-guh-church-gheralta-mountains-tigray-region-ethiopia-africa-RHPLF17382.jpg', // Westend61 image
    short: 'Cliff church. 6th-century. Epic climb, ancient frescoes, Gheralta views.',
    full: `The Most Dramatic Cliff Church in Ethiopia\n\nCarved into a sheer sandstone cliff at 2,580m altitude, this 6th-century church is only accessible by a vertical climb (with hand/foot holds) and a narrow ledge.\n\nHighlights:\n- Breathtaking 360° views of the Gheralta mountains\n- Pristine frescoes from the 9th–15th centuries (including the Nine Saints)\n- Intact ancient manuscripts sealed in leather covers\n- A holy cave where the founding priest, Abuna Yemata, is said to have prayed\n\nUnique Experience:\nPilgrims and visitors must remove shoes before the final ascent, following a tradition dating back 1,500 years.\n\nBest Time to Visit: October–March (cooler weather for climbing)\n\nPhysical Difficulty: ⚠️ Requires 1.5-hour hike and 20m rock scramble (no technical climbing)\n\nLocal Guide Tip:\nStart at dawn to avoid heat – the climb takes 2–3 hours round trip. Elderly visitors can view the church from the base with binoculars.\n\nWhy Visit?\n- Bucket-list adventure + spirituality\n- Exclusive: Few agencies promote Tigray's cliff churches\n- UNESCO potential: Part of Tigray's proposed "Gheralta Rock Churches" World Heritage nomination.`
  },
];

const ToursPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ paddingTop: '80px', background: '#f8f9fa', minHeight: '100vh' }}>
      <section style={{
        background: 'linear-gradient(rgba(30,60,114,0.8), rgba(42,82,152,0.8))',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ethiopia's Top Destinations</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto', opacity: 0.95 }}>
          Explore the most remarkable places in Ethiopia. Click on a destination to learn more about its history, culture, and natural wonders.
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
        {destinations.map((dest, idx) => (
          dest.link ? (
            <Link key={dest.name} to={dest.link} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'white',
                borderRadius: 20,
                boxShadow: '0 4px 16px rgba(30,60,114,0.08)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.2s',
                border: selected === idx ? '2px solid #ffd700' : 'none',
                position: 'relative'
              }}>
                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ color: '#1e3c72', fontSize: '1.3rem', marginBottom: 8 }}>{dest.name}</h2>
                  <p style={{ color: '#666', fontSize: '1rem', minHeight: 48 }}>{dest.short}</p>
                  <span style={{ color: '#2a5298', fontWeight: 500, fontSize: 14 }}>Click for more</span>
                </div>
              </div>
            </Link>
          ) : (
            <div key={dest.name} style={{
              background: 'white',
              borderRadius: 20,
              boxShadow: '0 4px 16px rgba(30,60,114,0.08)',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'transform 0.2s',
              border: selected === idx ? '2px solid #ffd700' : 'none',
              position: 'relative'
            }} onClick={() => setSelected(idx)}>
              <img src={dest.image} alt={dest.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ color: '#1e3c72', fontSize: '1.3rem', marginBottom: 8 }}>{dest.name}</h2>
                <p style={{ color: '#666', fontSize: '1rem', minHeight: 48 }}>{dest.short}</p>
                <span style={{ color: '#2a5298', fontWeight: 500, fontSize: 14 }}>Click for more</span>
              </div>
            </div>
          )
        ))}
      </div>
      {/* Modal for full description */}
      {selected !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(30,60,114,0.7)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} onClick={() => setSelected(null)}>
          <div style={{
            background: 'white',
            borderRadius: 20,
            maxWidth: 500,
            width: '90vw',
            boxShadow: '0 8px 32px rgba(30,60,114,0.18)',
            padding: '2rem',
            position: 'relative',
            textAlign: 'left'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'none',
              border: 'none',
              fontSize: 22,
              color: '#1e3c72',
              cursor: 'pointer'
            }}>&times;</button>
            <img src={destinations[selected].image} alt={destinations[selected].name} style={{ width: '100%', borderRadius: 12, marginBottom: 16 }} />
            <h2 style={{ color: '#1e3c72', fontSize: '1.5rem', marginBottom: 12 }}>{destinations[selected].name}</h2>
            <p style={{ color: '#333', fontSize: '1.1rem' }}>{destinations[selected].full}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToursPage; 