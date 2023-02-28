import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import Calculator from './Calculator';

const Nav = () => (
  <>
    <header>
      <h1 className="brand-logo left logo_postion hide-on-small-only">Math Magicians</h1>
      <nav className="nav-wrapper orange">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Calculator">Calculator</NavLink>
        <NavLink to="/Quote">Quotes</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Quote" element={<Quote />} />
    </Routes>
    <footer>
      <p>&copy;App by Oscar</p>
    </footer>
  </>
);

export default Nav;
