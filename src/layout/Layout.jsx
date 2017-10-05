import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/navbar/Navbar';
import logo from './logo.svg';

const Layout = ({ children, isOffTop }) => {
  const Brand = {
    url: logo,
    alt: 'Jheng-Hao Lin',
    href: '/',
  };

  const navItemsEnd = [
    { href: '#about', label: 'about' },
    { href: '#skills', label: 'skills' },
    { href: '#projects', label: 'projects' },
  ];


  return (
    <div className="layout">
      <Navbar brand={Brand} navbarEnd={navItemsEnd} isOffTop={isOffTop} />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  isOffTop: PropTypes.bool.isRequired,
};
Layout.defaultProps = {};

export default Layout;
