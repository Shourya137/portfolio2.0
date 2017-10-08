import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import menu from 'contents/menu.json';
import home from 'contents/home.json';
import about from 'contents/about.json';
// import resume from 'contents/resume.json';
import projects from 'contents/projects.json';

import Home from 'sections/home/Home';
import About from 'sections/about/About';
// import Resume from 'sections/resume/Resume';
import Projects from 'sections/projects/Projects';
import Layout from 'layout/Layout';
import 'bulma/css/bulma.css';
import 'devicon';

import './styles/index.css';

// TODO: Add Resume section
class App extends Component {
  render() {
    return (
      <Layout data={menu}>
        <Home data={home} />
        <About data={about} />
        <Projects data={projects} />
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();
