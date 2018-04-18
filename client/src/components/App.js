import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
// import Footer from './components/Footer/Footer';


import ProjectManager from './ProjectManager';
import Intro from './Intro';



class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#f7f7f9'}}>
        <Header />
        <Route path="/" component={Intro}/>
        <Route path="/projects" component={ProjectManager}/>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
