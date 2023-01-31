import React from 'react';

const Loading = () => {
  return (
    <section className='section-loader'>
      <div className='bouncing-loader'>
        <h1 className='loading'>Loading </h1>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
