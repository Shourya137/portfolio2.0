import React from 'react';
import PropTypes from 'prop-types';

import NavItem from '../navbar/NavItem';
import './hero-head.css';

const HeroHead = ({ brand, navItems, activeItem }) => {
  const Brand = brand ? (
    <div className="nav-left">
      <a className="nav-item" href={brand.href}>
        <img src={brand.url} alt={brand.alt} />
      </a>
    </div>
  ) : null;

  const NavItems = navItems.length > 0 ? (
    <div className="navbar-end">
      {navItems.map(({ content, href, target }) => (
        <NavItem
          isActive={activeItem === content}
          key={href}
          content={content}
          href={href}
          target={target}
        />
      ))}
    </div>
  ) : null;


  return (
    <div className="hero-head JHL_hero-head">
      <header className="nav">
        <div className="container">
          {Brand}
          <span className="nav-toggle">
            <span /><span /><span />
          </span>
          <div className="nav-right nav-menu">
            {NavItems}
          </div>
        </div>
      </header>
    </div>
  );
};

HeroHead.propTypes = {
  brand: PropTypes.shape({
    url: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      target: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.node, PropTypes.string,
      ]).isRequired,
    }),
  ),
  activeItem: PropTypes.string,
};
HeroHead.defaultProps = {
  brand: null,
  navItems: [],
  activeItem: '',
};

export default HeroHead;
