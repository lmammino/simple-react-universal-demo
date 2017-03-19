import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Menu;
