import React from 'react';
import UrlForm from '../components/UrlForm';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>URL Shortener</h1>
      <UrlForm />
    </div>
  );
};

export default Home;
