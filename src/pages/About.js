import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='section'>
      <h1 className='title'>About MangaKa</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, commodi.
        Corrupti quas porro neque, dolore distinctio sint! Asperiores laborum
        quae eos obcaecati quam nam accusamus voluptas tenetur, architecto
        saepe, vitae officia beatae neque assumenda nemo temporibus ex? Facilis
        quo accusamus est consectetur aut a, officia vel suscipit in iste
        quaerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi rerum
        quae nam necessitatibus iure, magnam voluptatum quam dolor, neque
        praesentium accusantium saepe, rem quibusdam provident esse facilis
        voluptatibus dolorem quas?
      </p>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default About;
