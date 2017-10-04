import React from 'react';
import Plx from 'react-plx';

import Profile from './profile.jpg';

export default () => (
  <Plx
    animateWhenNotInViewport
    parallaxData={[
      {
        start: '#home',
        duration: 'height',
        name: 'first',
        easing: [0.785, 0.135, 0.15, 0.86],
        properties: [
          { startValue: -100, endValue: 0, unit: 'px', property: 'translateX' },
        ],
      },
      {
        start: '#about',
        duration: 'height',
        name: 'second',
        easing: [0.785, 0.135, 0.15, 0.86],
        properties: [
          { startValue: 0, endValue: -250, unit: 'px', property: 'translateY' },
        ],
      },
    ]}
  >
    <img src={Profile} className="profile" alt="Jheng-Hao Lin" />
  </Plx>
);
