import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import Itemspage from './components/Pages/Itemspage';
class App extends Component {
  render() {
    return (  
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/Items/:id" component={Itemspage} />
      </div>
    );
  }
}

export default App;
