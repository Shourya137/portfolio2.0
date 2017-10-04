import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import cx from 'classnames';

import NavItem from './NavItem';

// TODO: Add box shadow once scroll off top
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleActive = this.handleActive.bind(this);
  }

  toggleNavbar() { this.setState({ isActive: !this.state.isActive }); }

  // trigger after any of the nav-item is clicked
  handleActive() { this.setState({ isActive: false }); }

  render() {
    const { brand, navbarStart, navbarEnd, activeItem } = this.props;
    const { isActive } = this.state;
    const { Link } = Scroll;

    const NavbarStart = navbarStart ? (
      <div className="navbar-start">
        {navbarStart.map(({ label, href, target }, index) => (
          <NavItem
            handleActive={this.handleActive}
            index={index}
            isActive={activeItem === label}
            key={href}
            label={label}
            href={href}
            target={target}
          />
        ))}
      </div>
    ) : null;

    const NavbarEnd = navbarEnd ? (
      <div className="navbar-end">
        {navbarEnd.map(({ label, href, target }, index) => (
          <NavItem
            handleActive={this.handleActive}
            index={index}
            isActive={activeItem === label}
            key={href}
            label={label}
            href={href}
            target={target}
          />
        ))}
      </div>
    ) : null;

    const HamburgerButton = (
      <button
        onClick={this.toggleNavbar}
        className={
          cx('button', 'navbar-burger', { 'is-active': isActive })
        }
      >
        <span /><span /><span />
      </button>
    );

    const Brand = brand ? (
      <Link
        to="home"
        smooth="easeOutQuart"
        duration={1000}
        className="navbar-item"
        href={brand.href}
      >
        <img src={brand.url} alt={brand.alt} width="112" height="28" />
      </Link>
    ) : null;

    return (
      <nav className="navbar fixed" aria-label="main navigation">
        <div className="navbar-brand">
          {Brand}
          {HamburgerButton}
        </div>
        <div className={cx('navbar-menu', { 'is-active': isActive })}>
          {NavbarStart}
          {NavbarEnd}
        </div>
        <div className={cx('is-overlay', { 'is-active': isActive })} />
      </nav>
    );
  }
}

Navbar.propTypes = {
  brand: PropTypes.shape({
    url: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  navbarStart: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      target: PropTypes.string,
      label: PropTypes.oneOfType([
        PropTypes.node, PropTypes.string,
      ]).isRequired,
    }),
  ),
  navbarEnd: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      target: PropTypes.string,
      label: PropTypes.oneOfType([
        PropTypes.node, PropTypes.string,
      ]).isRequired,
    }),
  ),
  activeItem: PropTypes.string,
};
Navbar.defaultProps = {
  brand: null,
  navbarStart: [],
  navbarEnd: [],
  activeItem: '',
};

export default Navbar;
