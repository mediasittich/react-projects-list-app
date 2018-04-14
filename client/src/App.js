import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

// import Crew from './components/crew/crew';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />
        {/* Searchbar */}
        {/* Add new note */}
        {/* Notes View Selector */}
        {/* Notes Card Deck */}
        {/* Footer */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>my app goes here!</p>
      </div>
    );
  }
}

export default App;
