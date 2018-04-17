import React, { Component } from 'react';
import './App.css';
import Header from './Header';
// import Footer from './components/Footer/Footer';
import ProjectManager from './ProjectManager';



class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#f7f7f9'}}>
        <Header />
        <ProjectManager />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
