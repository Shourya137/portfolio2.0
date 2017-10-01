import React from 'react';
import Plx from 'react-plx';

import './Circle.css';

const Circle = () => (
  <Plx
    className="circle"
    animateWhenNotInViewport
    parallaxData={[
      {
        start: 'top',
        duration: 'height',
        name: 'first',
        properties: [
          { startValue: 1, endValue: 0.8, property: 'scale' },
          { startValue: '#809', endValue: '#a00', property: 'borderColor' },
          { startValue: 0, endValue: -105, unit: 'px', property: 'translateY' },
          { startValue: 1, endValue: 0.3, property: 'opacity' },
        ],
      },
      {
        start: '#about',
        duration: 'height',
        name: 'second',
        properties: [
          { startValue: '#a00', endValue: '#a0a', property: 'borderColor' },
          { startValue: -105, endValue: 0, unit: 'px', property: 'translateY' },
        ],
      },
      {
        start: '#skills',
        duration: 'height',
        name: 'third',
        properties: [
          { startValue: '#a0a', endValue: '#0aa', property: 'borderColor' },
        ],
      },
      {
        start: '#projects',
        duration: 'height',
        name: 'forth',
        properties: [
          { startValue: '#0aa', endValue: '#aba', property: 'borderColor' },
        ],
      },
    ]}
  />
);

Circle.propTypes = {};
Circle.defaultProps = {};

export default Circle;
