import React from 'react';
import Plx from 'react-plx';

import StartArrow from 'components/StartArrow/StartArrow';
import Section from 'layout/Section';
import Logo from 'layout/JLLogo.svg';

const Home = ({ data: { title, logoAlt } }) => (
  <Section name="home" size="fullHeight" id="home">
    <Plx
      className="columns is-multiline"
      animateWhenNotInViewport
      parallaxData={[
        {
          start: '#home',
          duration: 300,
          name: 'home',
          properties: [],
        },
      ]}
    >
      { Logo ? <div className="home column is-half-desktop is-half-tablet">
        <div className="logo-container">
          <img className="logo" src={Logo} alt={logoAlt} />
        </div>
      </div> : null
      }
      { title ? <div className="column is-centered is-12">
        <h1 className="home-title">{title}</h1>
      </div> : null}
      <div className="column is-centered is-12">
        <StartArrow to="about" />
      </div>
    </Plx>
  </Section>
);

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
