import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="menu-bar">
      <Link to="/">
        <img src="img/favicon.png" className="nav-bar-logo" alt="Grocery Guardians logo" />
      </Link>
      <div className="nav-tabs">
        <Link to="/">Home</Link>
        <Link to="/grocery-stores">Grocery Stores</Link>
      </div>
    </nav>
  );
};

export default NavBar;

