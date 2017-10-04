import React from 'react';
import Plx from 'react-plx';

import Section from '../../layout/Section';
import Profile from './profile.jpg';
import ContactIcon from './ContactIcon';

const About = () => {
  const contacts = [
    { iconClass: 'linkedin', href: 'https://linkedin.com/in/linuk' },
    { iconClass: 'github-alt', href: 'https://github.com/linuk' },
    { iconClass: 'envelope', href: 'mailto:hello.linuk@gmail.com' },
    { iconClass: 'phone', href: '' },
  ];

  const ContactIcons = contacts.map(contact => (
    <ContactIcon
      key={contact.iconClass}
      href={contact.href}
      iconClass={contact.iconClass}
    />
  ));

  return (
    <Section name="about" size="fullHeight" id="about">
      <Plx
        className="columns box is-paddingless is-clipped"
        style={{ borderRadius: '25px' }}
        animateWhenNotInViewport
        parallaxData={[
          {
            start: '#home',
            duration: 'height',
            name: 'home',
            properties: [
              { startValue: 0, endValue: 1, property: 'scale' },
            ],
          },
          {
            start: '#about',
            duration: 'height',
            name: 'about',
            properties: [
              { startValue: 0, endValue: -100, unit: 'px', property: 'translateY' },
            ],
          },
        ]}
      >

        <div className="column is-one-quarter is-paddingless profile-img-container">
          <img src={Profile} className="profile" alt="Jheng-Hao Lin" />
        </div>
        <div className="column">
          <div className="content has-text-centered has-text-left-desktop has-text-left-tablet ">
            <h1 className="name">Jheng-Hao Lin</h1>
            <p className="education">Bachelor of Landscape Design, National Taiwan University <br />
              Studying BSc Computer Science in Goldsmiths, University of London</p>
            <p className="shortProfile">I am an undergraduate student studying computer science at Goldsmiths, University of London. With web development experience gained via internships, I changed my career path to programming because of my passion and enthusiasm for web development, now seeking opportunities within an IT Company that offers part-time jobs or internships.</p>
            <div className="icons">
            {ContactIcons}
            </div>
          </div>
        </div>
      </Plx>
    </Section>
  );
};

About.propTypes = {};
About.defaultProps = {};

export default About;
