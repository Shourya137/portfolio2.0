import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Fa from 'react-fontawesome';
import cx from 'classnames';

const StartArrow = ({ to, className }) => {
  const { Link } = Scroll;
  const iconClass = cx(
    'start-arrow',
    { [className]: className },
  );
  return (
    <Link
      to={to}
      smooth
      duration={500}
      activeClass="isActive"
    >
      <Fa
        name="angle-down"
        size="3x"
        className={iconClass}
      />
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
