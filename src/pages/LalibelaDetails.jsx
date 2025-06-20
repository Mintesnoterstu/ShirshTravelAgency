import React from 'react';
import { Link } from 'react-router-dom';

const LalibelaDetails = () => {
  console.log('LalibelaDetails component is rendering!'); // Debug log
  
  return (
    <div style={{ 
      paddingTop: '100px', 
      background: 'white', 
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <div style={{ background: 'red', color: 'white', padding: '1rem', marginBottom: '1rem' }}>
        TEST: Lalibela page is loading!
      </div>
      
      <h1 style={{ color: 'black', fontSize: '2rem' }}>Lalibela Details Page</h1>
      <p>This is a test to see if the page is visible.</p>
      
      <Link to="/tours" style={{
        background: 'blue',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '10px',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '1rem'
      }}>
        Back to Tours
      </Link>
    </div>
  );
};

export default LalibelaDetails; 