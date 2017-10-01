import * as React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Layout from './layout/Layout';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Home />
        <About />
        <Skills />
        <Projects />
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
