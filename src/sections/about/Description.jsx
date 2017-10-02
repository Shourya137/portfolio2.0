import React from 'react';
import Plx from 'react-plx';

export default () => (
  <Plx
    className="content is-medium"
    animateWhenNotInViewport
    parallaxData={[
      {
        start: '#home',
        duration: 'height',
        name: 'first',
        properties: [
          { startValue: 0, endValue: 1, property: 'opacity' },
        ],
      },
      {
        start: '#about',
        duration: 'height',
        name: 'second',
        properties: [
          { startValue: 0, endValue: -100, unit: 'px', property: 'translateY' },
        ],
      },
    ]}
  >
    <h1>Jheng-Hao Lin</h1>
    <p>UK, London</p>
    <p>Bachelor of Landscape Design, National Taiwan University <br />
    Studying BSc Computer Science in Goldsmiths, University of London</p>
  </Plx>
);
