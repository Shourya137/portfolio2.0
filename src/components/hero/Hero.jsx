import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Hero = (props) => {
  const HeroClass = cx(
    'hero',
    { 'is-bold': props.isBold },
    { 'is-primary': props.color === 'primary' },
    { 'is-info': props.color === 'info' },
    { 'is-danger': props.color === 'danger' },
    { 'is-success': props.color === 'success' },
    { 'is-warning': props.color === 'warning' },
    { 'is-danger': props.color === 'danger' },
    { 'is-black': props.color === 'black' },
    { 'is-dark': props.color === 'dark' },
    { 'is-light': props.color === 'light' },
    { 'is-white': props.color === 'white' },
    { 'is-large': props.size === 'large' },
    { 'is-medium': props.size === 'medium' },
    { 'is-small': props.size === 'small' },
    { 'is-fullheight': props.size === 'fullHeight' },
  );

  return (
    <div className={HeroClass} id={props.id} style={{overflow: 'hidden'}}>
      {props.children}
    </div>
  );
};

Hero.propTypes = {
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
Hero.defaultProps = {
  isBold: false,
  color: null,
  size: null,
  id: null,
};

export default Hero;
