import React from 'react';
import Plx from 'react-plx';

import StartArrow from 'components/StartArrow/StartArrow';
import Section from 'layout/Section';
import Profile from './profile.jpg';
import ContactButton from './ContactButton';

const About = (props) => {
  const {
    title = '',
    subtitle = '',
    content: {
      name = '',
      education = '',
      shortProfile = '',
      contacts = [],
    },
  } = props.data;
  const ContactButtons = contacts.map(contact => (
    <ContactButton
      key={contact.iconClass}
      href={contact.href}
      iconClass={contact.iconClass}
      isOpenNewPage={contact.isOpenNewPage}
      title={contact.title}
    />
  ));

  return (
    <Section name={title} size="fullHeight" id={title} title={title} subtitle={subtitle}>
      <Plx
        className="columns box is-paddingless is-clipped is-multiline"
        animateWhenNotInViewport
        parallaxData={[
          { start: '#home', duration: 'height', name: 'home', properties: [] },
          { start: '#about', duration: 200, offset: -100, name: 'about', properties: [] },
        ]}
      >

        <div className="column is-one-quarter is-paddingless profile-img-container">
          <img src={Profile} className="profile" alt="Jheng-Hao Lin" />
        </div>
        <div className="column section content has-text-centered has-text-left-desktop has-text-left-tablet ">
          <h1 className="name">{name}</h1>
          <p className="education">
            {education.map(edu => <span key={edu}>{edu}<br /></span>)}
          </p>
          <p className="shortProfile">{shortProfile}</p>
          <div className="icons">
            {ContactButtons}
          </div>
        </div>
      </Plx>
      <StartArrow to="projects" className="is-hidden-touch" />
    </Section>
  );
};

About.propTypes = {};
About.defaultProps = {};

export default About;
