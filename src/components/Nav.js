import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import Calculator from './Calculator';

const Nav = () => (
  <>
    <header>
      <h1 className="brand-logo left logo_postion hide-on-small-only">Math Magicians</h1>
      <nav className="nav-wrapper orange">
        <Link to="/">Home</Link>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/Quote">Quote</Link>
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
