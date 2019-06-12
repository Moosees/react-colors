import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div
    style={{
      backgroundColor: '#00bcd4',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <h1 style={{ color: '#222' }}>
      This color does not exist (yet). Do you want to{' '}
      <Link to="/palette/new">create it?</Link> Or <Link to="/">go home?</Link>
    </h1>
  </div>
);

export default NotFound;
