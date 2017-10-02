import React from 'react';
import Section from '../../layout/Section';
import Plx from 'react-plx';


import './Home.css';

const Home = () => (
  <Section name="home" size="fullHeight" id="home">
    <div className="container has-text-centered">
      <Plx
        animateWhenNotInViewport
        parallaxData={[
          {
            start: '#home',
            duration: 200,
            name: 'second',
            properties: [
              {
                startValue: 0,
                endValue: -100,
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
