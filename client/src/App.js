import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoteManager from './components/NoteManager/NoteManager';

// import Crew from './components/crew/crew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* Searchbar */}
        <NoteManager />
        <Footer />
      </div>
    );
  }
}

export default App;
