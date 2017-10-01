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
          { startValue: 100, endValue: 0, unit: 'px', property: 'translateX' },
          { startValue: 0, endValue: 1, property: 'opacity' },
        ],
      },
      {
        start: '#about',
        duration: 'height',
        name: 'second',
        properties: [
          { startValue: 0, endValue: -150, unit: 'px', property: 'translateX' },
          { startValue: 1, endValue: 0, property: 'opacity' },
        ],
      },
    ]}
  >
    <p>UK, London<br />
      Bachelor of Landscape Design, National Taiwan University<br />
      Studying BSc Computer Science in Goldsmiths, University of London<br />
    </p>
  </Plx>
);
