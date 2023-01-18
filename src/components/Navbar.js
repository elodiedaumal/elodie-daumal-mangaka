import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-position'>
        <Link to='/' className='logo'>
          Rick and Morty
        </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
