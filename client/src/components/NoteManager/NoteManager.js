import React, { Component } from 'react';
import './NoteManager.css';
import AddNote from '../AddNote/AddNote';

class NoteManager extends Component {
    render() {
        return (
            <main className="container mt-5">
                {/* Add new note */}
                <AddNote />
                {/* Notes View Selector */}
                {/* Notes Card Deck */}
            </main>
        );
    }
}

export default NoteManager;