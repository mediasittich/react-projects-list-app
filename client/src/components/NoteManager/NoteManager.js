import React, { Component } from 'react';
import './NoteManager.css';
import AddNote from '../AddNote/AddNote';
import NotesListViewSelector from '../NotesListViewSelector/NotesListViewSelector';
import NotesCardDeck from '../NotesCardDeck/NotesCardDeck';

class NoteManager extends Component {
    render() {
        return (
            <main className="container mt-5">
                <AddNote />
                <NotesListViewSelector />
                <NotesCardDeck />
            </main>
        );
    }
}

export default NoteManager;