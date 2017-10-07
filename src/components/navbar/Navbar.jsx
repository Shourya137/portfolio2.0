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
      isOffTop: false,
      activeNavItem: '',
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const isActiveChange = nextState.isActive !== this.state.isActive;
    const isOffTopChange = nextState.isOffTop !== this.state.isOffTop;
    const isActiveNavItemChange = nextState.activeNavItem !== this.state.activeNavItem;
    return isActiveChange || isOffTopChange || isActiveNavItemChange;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    console.log('CDU');
  }

  handleScroll(event) {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    // Add shadow after scroll certain pixel from top
    const addShadowPosition = 0;
    let isOffTop = false;
    if (scrollPosition > addShadowPosition) isOffTop = true;
    this.setState({ isOffTop });
  }


  toggleNavbar() { this.setState({ isActive: !this.state.isActive }); }

  // trigger after any of the nav-item is clicked
  handleActive(label) {
    this.setState({ isActive: false, activeNavItem: label });
  }

  render() {
    const { brand, navbarStart, navbarEnd, activeItem } = this.props;
    const { isActive, isOffTop } = this.state;
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
        {brand.url ?
          (<img src={brand.url} alt={brand.alt} width="112" height="28" />) :
          (brand.alt) }
      </Link>
    ) : null;

    return (
      <nav
        className={cx('navbar fixed', { 'add-shadow': isOffTop })}
        aria-label="main navigation"
      >
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
