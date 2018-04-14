import React, { Component } from 'react';
import './NotesCardDeck.css';
import NoteCard from '../NoteCard/NoteCard';

class NotesCardDeck extends Component {
    render() {
        return (
            <div className="card-deck mb-4">
                <NoteCard />
            </div>
        );
    }
}

export default NotesCardDeck;