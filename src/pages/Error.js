import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='section'>
      <h1 className='title'>Error</h1>
      <h3>no page found</h3>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default Error;
