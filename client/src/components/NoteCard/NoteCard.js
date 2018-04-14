import React, { Component } from 'react';
import './NoteCard.css';

class NoteCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-row justify-content-between">
                        <h5 className="card-title">Card title</h5>
                        <div className="form-check">
                            {/* <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"> */}
                        </div>
                    </div>
                    
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                    <a href="#" className="btn btn-primary">Edit</a>
                    <a href="#" className="btn btn-primary">Delete</a>
                </div>
            </div>
        );
    }
}

export default NoteCard;