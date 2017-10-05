import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Fa from 'react-fontawesome';

const StartArrow = ({ to }) => {
  const { Link } = Scroll;
  return (
    <Link
      spy
      to={to}
      smooth="easeOutQuart"
      duration={1000}
      activeClass="isActive"
    >
      <Fa name="angle-down" size="3x" className="start-arrow" />
    </Link>
  );
};
StartArrow.propTypes = { to: PropTypes.string.isRequired };
StartArrow.defaultProps = {};

export default StartArrow;
