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
  constructor(props) {
    super(props);
    this.state = {
      isOffTop: false,
    };
    this.offTop = this.offTop.bind(this);
    this.onTop = this.onTop.bind(this);
  }

  onTop() {
    this.setState({ offTop: false });
  }

  offTop() {
    this.setState({ offTop: true });
  }

  render() {
    return (
      <Layout isOffTop={this.state.isOffTop}>
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
