import React from 'react';
import Plx from 'react-plx';

import Section from '../../layout/Section';
import ProjectCard from './ProjectCard';
import projectsJSON from './projectsContent.json';


// TODO: Improve Animation Performance
export default () => {
  const ProjectCards = projectsJSON.map(project => (
    <ProjectCard key={project.name} project={project} />
  ));

  return (
    <Section
      name="projects"
      size="fullHeight"
      id="projects"
      title="Projects"
      subtitle="Independent projects, University projects and exercises from books."
    >
      <Plx
        className="columns is-multiline"
        animateWhenNotInViewport
        parallaxData={[
          { start: '#about', duration: 'height', name: 'about', properties: [] },
          { start: '#projects', offset: -200, duration: 200, name: 'projects', properties: [] },
        ]}
      >
        {ProjectCards}
      </Plx>
    </Section>
  );
};
