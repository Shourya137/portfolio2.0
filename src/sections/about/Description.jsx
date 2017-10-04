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
          { startValue: 150, endValue: 0, unit: 'px', property: 'translateX' },
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
    <p>Bachelor of Landscape Design, National Taiwan University <br />
    Studying BSc Computer Science in Goldsmiths, University of London</p>
    <p>I am an undergraduate student studying computer science at Goldsmiths, University of London. With web development experience gained via internships, I changed my career path to programming because of my passion and enthusiasm for web development, now seeking opportunities within an IT Company that offers part-time jobs or internships.</p>
  </Plx>
);
