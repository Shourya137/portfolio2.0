import React from 'react';
import Plx from 'react-plx';
import Modal from 'components/modal/Modal';
import Section from 'layout/Section';

import ProjectCard from './ProjectCard';

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
    const subPage = name.replace(' ', '');
    window.history.pushState({}, name, subPage);
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
    window.history.go(-1);
    this.setState({ modal: { ...this.state.modal, isActive: false } });
  }

  render() {
    const { modal } = this.state;
    const { title, subtitle, projects } = this.props.data;
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

    const ProjectCards = projects.map(project => (
      <ProjectCard
        key={project.name}
        project={project}
        handleClickReadMore={this.showModal}
      />
    ));

    return (
      <Section
        name={title}
        size="fullHeight"
        id={title}
        title={title}
        subtitle={subtitle}
        displayTitle
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
