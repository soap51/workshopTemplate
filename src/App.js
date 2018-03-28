import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import About from './components/Pages/About';
class App extends Component {
  render() {
    return (  
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/About" component={About} />
      </div>
    );
  }
}

export default App;
