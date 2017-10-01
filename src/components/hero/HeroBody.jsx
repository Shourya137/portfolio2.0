import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const HeroBody = ({ align, children }) => {
  const containerClass = cx(
    'container',
    { 'has-text-centered': align === 'center' },
    { 'has-text-left': align === 'left' },
    { 'has-text-right': align === 'right' },
  );

  return (
    <div className="hero-body">
      <div className={containerClass}>
        {children}
      </div>
    </div>
  );
};

HeroBody.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']).isRequired,
};
HeroBody.defaultProps = {};

export default HeroBody;
