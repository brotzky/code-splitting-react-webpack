import React from 'react';
import Link from 'react-router/lib/Link';

const Core = ({ children }) =>
  <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/help'>Help</Link>
    </nav>
    <main>
      { children }
    </main>
  </div>;

export default Core;
