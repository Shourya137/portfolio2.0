import React from 'react';

import Section from '../../layout/Section';
import Profile from './Profile';
import Description from './Description';
import ContactIcon from './ContactIcon';

const contactIconMovingUnit = 250;

const About = () => (
  <Section name="about" size="small" id="about">
    <Profile />
    <Description />
    <div className="content is-large">
      <ContactIcon
        href="https://linkedin.com/in/linuk"
        iconClass="linkedin"
        movingUnit={contactIconMovingUnit}
        index={2}
        direction="left"
      />
      <ContactIcon
        href="https://github.com/linuk"
        iconClass="github-alt"
        movingUnit={contactIconMovingUnit}
        index={1}
        direction="left"
      />
      <ContactIcon
        href="mailto:hello.linuk@gmail.com"
        iconClass="envelope"
        movingUnit={contactIconMovingUnit}
        index={1}
        direction="right"
      />
      <ContactIcon
        href=""
        iconClass="phone"
        movingUnit={contactIconMovingUnit}
        index={2}
        direction="right"
      />
    </div>
  </Section>
);

About.propTypes = {};
About.defaultProps = {};

export default About;
