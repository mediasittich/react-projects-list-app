import React, { Component } from 'react';
import './NoteManager.css';
import AddNote from '../AddNote/AddNote';
import NotesListViewSelector from '../NotesListViewSelector/NotesListViewSelector';

class NoteManager extends Component {
    render() {
        return (
            <main className="container mt-5">
                <AddNote />
                <NotesListViewSelector />
                {/* Notes Card Deck */}
            </main>
        );
    }
}

export default NoteManager;