import React from 'react';

import Section from '../../layout/Section';
import Profile from './Profile';
import Name from './Name';
import Description from './Description';
import './About.css';


const About = () => (
  <Section name="about" size="fullHeight" color="light" id="about">
    <Profile />
    <div className="section">
      <Name />
      <Description />
    </div>
  </Section>
);

About.propTypes = {};
About.defaultProps = {};

export default About;
