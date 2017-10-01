import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';

import Navbar from '../components/navbar/Navbar';
import logo from './logo.svg';
import './layout.css';

const Layout = ({ children }) => {
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
      <Navbar brand={Brand} navbarEnd={navItemsEnd} />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
Layout.defaultProps = {};

export default Layout;
