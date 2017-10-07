import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

import Hero from 'components/hero/Hero';
import HeroBody from 'components/hero/HeroBody';

const Section = ({ children, name, color, isBold, size, id, title, subtitle }) => {
  const Element = Scroll.Element;
  const Title = title ? (
    <div className="section content is-small">
      <h1 className="title is-uppercase">{title}</h1>
      {subtitle ? <h2 className="is-capitalized">{subtitle}</h2> : null}
    </div>
  ) : null;
  return (
    <Element name={name}>
      <Hero id={id} size={size} isBold={isBold} color={color}>
        <HeroBody align="center">
          {Title}
          {children}
        </HeroBody>
      </Hero>
    </Element>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
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
  title: '',
  subtitle: '',
  isBold: false,
  color: null,
  size: null,
  id: null,
};

export default Section;
