import React from 'react';
import Plx from 'react-plx';

import Section from '../../layout/Section';

import './Home.css';

const Home = () => (
  <Section name="home" size="fullHeight" id="home">
    <div className="container has-text-centered">
      <Plx
        animateWhenNotInViewport
        parallaxData={[
          {
            start: '#home',
            duration: 300,
            name: 'second',
            easing: [0.785, 0.135, 0.15, 0.86],
            properties: [
              {
                startValue: 0,
                endValue: -200,
                unit: 'px',
                property: 'translateY',
              },
              {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
              },
            ],
          },
        ]}
      >
        <div className="home-CTA">
          <h1 className="title home-CTA-title">Jheng-Hao Lin</h1>
        </div>
      </Plx>
    </div>
  </Section>
);

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
