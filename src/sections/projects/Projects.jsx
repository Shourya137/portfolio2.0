import React from 'react';

import Section from '../../layout/Section';
import ProjectCard from './ProjectCard';
import projectsJSON from './projectsContent.json';

export default () => {
  const ProjectCards = projectsJSON.map(project => (
    <ProjectCard key={project.name} project={project} />
  ));

  return (
    <Section name="projects" size="fullHeight" id="projects">
      <div className="columns is-multiline">
        {ProjectCards}
      </div>
    </Section>
  );
};
