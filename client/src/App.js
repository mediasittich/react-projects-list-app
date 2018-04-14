import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import Crew from './components/crew/crew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* Searchbar */}
        {/* Note Manager  */}
          {/* Add new note */}
          {/* Notes View Selector */}
          {/* Notes Card Deck */}
        <Footer />
      </div>
    );
  }
}

export default App;
