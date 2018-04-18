import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';



import ProjectManager from './ProjectManager';
import Intro from './Intro';
import Signup from './Signup';
import Login from './Login';



class App extends Component {
  render() {
    return (
      <div>
        <Route path="/projects" component={ProjectManager}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" component={Intro}/>
      </div>
    );
  }
}

export default App;
