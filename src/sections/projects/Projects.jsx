import React from 'react';
import Plx from 'react-plx';

import Section from '../../layout/Section';
import ProjectCard from './ProjectCard';
import projectsJSON from './projectsContent.json';
import Modal from '../../components/modal/Modal';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        isActive: false,
        buttons: [],
        title: '',
        content: '',
        images: [],
      },
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(project) {
    const { name, longDescription, githubURL, liveDemo, images } = project;
    const buttons = [];
    if (githubURL) { buttons.push({ iconClass: 'github', href: githubURL, label: 'github' }); }
    if (liveDemo) { buttons.push({ iconClass: 'play-circle', href: liveDemo, label: 'demo' }); }

    this.setState({
      modal: {
        buttons,
        images,
        isActive: true,
        title: name,
        content: longDescription,
      },
    });
  }

  closeModal() {
    this.setState({ modal: { ...this.state.modal, isActive: false } });
  }

  render() {
    const { modal } = this.state;
    const theModal = (
      <Modal
        isActive={modal.isActive}
        title={modal.title}
        content={modal.content}
        buttons={modal.buttons}
        images={modal.images}
        closeModal={this.closeModal}
      />
    );

    const ProjectCards = projectsJSON.map(project => (
      <ProjectCard
        key={project.name}
        project={project}
        handleClickReadMore={this.showModal}
      />
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
            { start: '#projects', offset: -200, duration: 'height', name: 'projects', properties: [] },
          ]}
        >
          {ProjectCards}
        </Plx>
        {theModal}
      </Section>
    );
  }
}

export default Projects;
