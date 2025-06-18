import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Discover Ethiopia
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Experience the cradle of humanity, ancient civilizations, and breathtaking landscapes
        </p>
        <button style={{
          background: '#ffd700',
          color: '#1e3c72',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '25px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Explore Tours
        </button>
      </div>
    </div>
  );
};

export default Home; 