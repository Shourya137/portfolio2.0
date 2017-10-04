import * as React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Skills from './sections/Skills';
import Projects from './sections/projects/Projects.jsx';
import Layout from './layout/Layout';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Home />
          {/*<div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} />*/}
          <About />
          {/*<div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} />*/}
          {/*<Skills />*/}
          {/*<div style={{ width: '100vw', height: '2px', backgroundColor: '#333' }} />*/}
          <Projects />
        </Layout>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
