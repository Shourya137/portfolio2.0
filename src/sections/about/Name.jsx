import React from 'react';
import Plx from 'react-plx';

export default () => (
  <Plx
    className="content"
    animateWhenNotInViewport
    parallaxData={[
      {
        start: '#home',
        duration: 'height',
        name: 'first',
        properties: [
          { startValue: 100, endValue: 0, unit: 'px', property: 'translateY' },
          { startValue: 0, endValue: 1, property: 'opacity' },
        ],
      },
      {
        start: '#about',
        duration: 'height',
        name: 'second',
        properties: [
          { startValue: 0, endValue: -50, unit: 'px', property: 'translateY' },
          { startValue: 1, endValue: 0, property: 'opacity' },
        ],
      },
    ]}
  >
    <h1>Jheng-Hao Lin</h1>
  </Plx>
);
