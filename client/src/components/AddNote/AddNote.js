import React, { Component } from 'react';
import './AddNote.css';

class AddNote extends Component {
    render() {
        return (
            <div className="text-center mt-4 mb-2">
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">Add New Note</button>
            </div>
        );
    }
}

export default AddNote;