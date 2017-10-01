import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

import Hero from '../components/hero/Hero';
import HeroBody from '../components/hero/HeroBody';

const Section = ({ children, name, color, isBold, size, id }) => {
  const Element = Scroll.Element;
  return (
    <Element name={name}>
      <Hero id={id} size={size} isBold={isBold} color={color}>
        <HeroBody align="center">
          {children}
        </HeroBody>
      </Hero>
    </Element>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  isBold: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'fullHeight',
  ]),
  color: PropTypes.oneOf([
    'primary',
    'info',
    'danger',
    'warning',
    'danger',
    'success',
    'black',
    'dark',
    'light',
    'white',
  ]),
  id: PropTypes.string,
};
Section.defaultProps = {
  isBold: false,
  color: null,
  size: null,
  id: null,
};

export default Section;
