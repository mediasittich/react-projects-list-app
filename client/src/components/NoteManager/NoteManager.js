import React, { Component } from 'react';
import './NoteManager.css';
import Searchbar from '../Searchbar/Searchbar';
import AddNote from '../AddNote/AddNote';
import NotesListViewSelector from '../NotesListViewSelector/NotesListViewSelector';
import NoteCard from '../NoteCard/NoteCard';

const API_URL = '/api/projects';

class NoteManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.loadNotes();
    }

    loadNotes() {
        fetch(API_URL)
            .then(res => {
                if(!res.ok) {
                    if(res.status >= 400 && res.status < 500) {
                        return res.json().then(data => {
                            let err = {errorMessage: data.message};
                            throw err;
                        })
                    } else {
                        let err = {errorMessage: 'Please try again later. Server is not responding.'};
                        throw err;
                    }
                }
                return res.json();
            })
        .then(projects => this.setState({projects}));
    }

    render() {
        const projects = this.state.projects.map((p) => (
            <NoteCard
                key={p._id}
                {...p}
            />
        ));
        return (
            <main className="container mt-5">
                <Searchbar />
                <AddNote />
                <NotesListViewSelector />
                
                <div className="card-deck mb-4">
                    {projects}
                </div>
            </main>
        );
    }
}

export default NoteManager;