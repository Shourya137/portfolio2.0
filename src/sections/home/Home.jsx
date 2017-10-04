import React from 'react';
import Plx from 'react-plx';
import Fa from 'react-fontawesome';
import Section from '../../layout/Section';
import Scroll from 'react-scroll';

const Home = () => {
  const { Link } = Scroll;
  const StartArrowTo = 'about';
  const StartArrow = (
    <Link
      spy
      to={StartArrowTo}
      smooth="easeOutQuart"
      duration={1000}
      activeClass="isActive"
    >
      <Fa name="angle-down" size="5x" className="start-arrow" />
    </Link>
  );
  return (
    <Section name="home" size="fullHeight" id="home">
      <Plx
        className="columns is-multiline"
        animateWhenNotInViewport
        parallaxData={[
          {
            start: '#home',
            duration: 300,
            name: 'second',
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
              },
            ],
          },
        ]}
      >
        <div className="home column is-half-desktop is-half-tablet ">
          <h1 className="title home-title">Jheng-Hao Lin</h1>
        </div>
        <div className="column is-centered is-12">
          {StartArrow}
        </div>
      </Plx>
    </Section>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
