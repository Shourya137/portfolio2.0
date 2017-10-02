import React from 'react';
import Plx from 'react-plx';


import Profile from './profile.jpg';
import './Profile.css';

export default () => (
  <Plx
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
          { startValue: 0, endValue: -250, unit: 'px', property: 'translateY' },
        ],
      },
    ]}
  >
    <img src={Profile} className="profile" alt="Jheng-Hao Lin" />
  </Plx>
);
