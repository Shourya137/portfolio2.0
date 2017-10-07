import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'components/navbar/Navbar';
import logo from './logo.svg';

const Layout = ({ children, data: {brand, navItemsStart, navItemsEnd} }) => {
  return (
    <div className="layout">
      <Navbar
        brand={brand}
        navbarEnd={navItemsEnd}
        navItemsStart={navItemsStart}
      />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
Layout.defaultProps = {};

export default Layout;
