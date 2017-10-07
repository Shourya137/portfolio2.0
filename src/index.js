import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import menu from 'contents/menu.json';
import about from 'contents/about.json';
import resume from 'contents/resume.json';
import projects from 'contents/projects.json';

import Home from 'sections/home/Home';
import About from 'sections/about/About';
import Resume from 'sections/resume/Resume';
import Projects from 'sections/projects/Projects';
import Layout from 'layout/Layout';
import 'bulma/css/bulma.css';
import 'devicon';

import './styles/index.css';


class App extends Component {
  render() {
    return (
      <Layout data={menu}>
        <Home />
        {/* <div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} /> */}
        <About data={about} />
        {/* <div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} /> */}
        <Resume data={resume} />
        {/* <div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} /> */}
        <Projects data={projects} />
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();
