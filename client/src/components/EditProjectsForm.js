import React, { Component } from 'react';

class EditProjectForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            content: this.props.content,
            updated_date: Date.now(),
            completed: this.props.completed
        }
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <header className="Modal__header">
                    <h5 className="Modal__title">Add New Project</h5>
                    <button
                        className="Modal__closeBtn"
                        onClick={this.props.closeModal}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </header>
                <section className="Modal__body">
                    <div className="md-form mb-3">
                        <input 
                            className="form-control"
                            type="text"
                            defaultValue={this.state.title} 
                            onChange={this.handleTitleChange}
                        />
                        <label>Project title</label>
                    </div>
                    <div className="md-form">
                        <textarea 
                            type="text"
                            className="md-textarea form-control"
                            name="content" 
                            id="content" 
                            cols="30" 
                            rows="3"
                            defaultValue={this.state.content}
                            onChange={this.handleContentChange}
                        ></textarea>
                        <label>Short outline of your awesome ideas...</label>
                    </div>
                </section>
                <footer className="Modal__footer">
                    <button 
                        className="btn btn-light waves-effect waves-light"
                        onClick={this.props.closeModal}
                    >Close</button>
                    <button
                        className="btn btn-danger waves-effect waves-light"
                        onClick={this.handleSubmit}
                    >Save Changes</button>
                </footer>
            </div>
        );
    }
}

export default EditProjectForm;