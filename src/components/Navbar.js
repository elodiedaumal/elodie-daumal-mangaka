import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-position'>
        <Link to='/' className='logo'>
          MangaKa
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='Home'>Home</Link>
          </li>
          <li>
            <Link to='About'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
