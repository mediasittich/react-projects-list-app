import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import NoteManager from './components/NoteManager/NoteManager';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NoteManager />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
