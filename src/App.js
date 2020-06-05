import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from "./Projects.js";

import './App.css';
import './App.sass';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/projects' component={Projects} />
      </Switch>  
    </div>
  );
}

export default App;
