import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Scroll from 'react-scroll';

const NavItem = ({ label, handleActive }) => {
  // Customised link component
  const LinkContainer = (props) => {
    const isActive = props.className;
    return (
      <a
        {...props}
        className={cx('navbar-item', 'is-uppercase', { 'is-active': isActive })}
      >
        {props.children}
      </a>
    );
  };

  const Link = Scroll.Helpers.Scroll(LinkContainer);
  this.handleActive = () => handleActive(label);

  return (
    <Link
      to={label}
      smooth
      duration={500}
      activeClass="isActive"
      onSetActive={this.handleActive}
    >
      {label}
    </Link>
  );
};

NavItem.propTypes = {
  // For original <a> usage
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  // For animation transition delay
  index: PropTypes.number.isRequired,
  handleActive: PropTypes.func.isRequired,
};
NavItem.defaultProps = {
  href: '',
  target: null,
  label: '',
};

export default NavItem;
