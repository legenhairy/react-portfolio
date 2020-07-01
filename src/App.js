import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from "./components/Projects.js";
import HomePage from './HomePage';
import './App.css';
import './App.sass';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/projects'>
          <Projects />	
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
