import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddProjectForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event){
        this.setState({title: event.target.value});
    }
    handleContentChange(event){
        this.setState({content: event.target.value});
    }


    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        this.props.addProject(this.state);
    }

    render() {
        return (
            <div className="card card-body">
                <div>
                    <span className="card-title h4 my-auto"><i className="fa fa-file-text-o fa-lg"></i> New Note</span>
                    <button type="button">
                        <span aria-hidden="true"><i className="fa fa-remove mr-2 text-danger"></i></span>
                    </button>
                </div>

                <form>
                <input 
                    className="form-control"
                    type="text" 
                    value={this.state.title} 
                    onChange={this.handleTitleChange}
                />
                <textarea 
                    className="form-control"
                    name="content" 
                    id="content" 
                    cols="30" 
                    rows="3"
                    value={this.state.content}
                    onChange={this.handleContentChange}
                ></textarea>
                <button 
                    onClick={this.handleSubmit} 
                >Add New Project</button>
                </form>
            </div>
        );
    }
}

// AddProject.propTypes = {
//     handleAddProject: PropTypes.func
// }

export default AddProjectForm;