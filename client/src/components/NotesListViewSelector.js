import React, { Component } from 'react';

class NotesListViewSelector extends Component {
    render() {
        return (
            <div className="text-center mb-4">
                <div className="form-check form-check-inline">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="all" />
                        All
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="active" />
                        Active
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="completed" />
                        Completed
                    </label>
                </div>
            </div>
        );
    }
}

export default NotesListViewSelector;