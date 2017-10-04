import React from 'react';

import Section from '../../layout/Section';
import Profile from './Profile';
import Description from './Description';
import ContactIcon from './ContactIcon';

const About = () => {
  const contactIconMovingUnit = 100;
  const contacts = [
    { iconClass: 'linkedin', href: 'https://linkedin.com/in/linuk' },
    { iconClass: 'github-alt', href: 'https://github.com/linuk' },
    { iconClass: 'envelope', href: 'mailto:hello.linuk@gmail.com' },
    { iconClass: 'phone', href: '' },
  ];

  const ContactIcons = contacts.map((contact, index) => (
    <ContactIcon
      key={contact.iconClass}
      href={contact.href}
      iconClass={contact.iconClass}
      movingUnit={contactIconMovingUnit}
      index={index}
      direction="right"
    />
  ));

  return (
    <Section name="about" size="fullHeight" id="about">
      <div className="columns">
        <div className="column is-one-third">
          <Profile />
        </div>
        <div className="column">
          <div className="content has-text-centered has-text-left-desktop has-text-left-tablet ">
            <Description />
            {ContactIcons}
          </div>
        </div>
      </div>
    </Section>
  );
};

About.propTypes = {};
About.defaultProps = {};

export default About;
