import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Home from './sections/home/Home';
import About from './sections/about/About';
// import Skills from './sections/Skills';
import Projects from './sections/projects/Projects';
import Layout from './layout/Layout';
import 'bulma/css/bulma.css';

import './styles/index.css';


class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
        {/* <div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} /> */}
        <About />
        {/* <div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} /> */}
        {/* <Skills /> */}
        {/* <div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} /> */}
        <Projects />
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();
