import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Fa from 'react-fontawesome';

const StartArrow = ({ to, className }) => {
  const { Link } = Scroll;
  return (
    <Link
      to={to}
      smooth
      duration={500}
      activeClass="isActive"
    >
      <Fa name="angle-down" size="3x" className={`start-arrow ${className}`} />
    </Link>
  );
};
StartArrow.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};
StartArrow.defaultProps = {
  className: '',
};

export default StartArrow;
