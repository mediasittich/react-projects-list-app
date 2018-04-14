import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';
import NoteManager from './components/NoteManager/NoteManager';

// import Crew from './components/crew/crew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Searchbar />
        <NoteManager />
        <Footer />
      </div>
    );
  }
}

export default App;
