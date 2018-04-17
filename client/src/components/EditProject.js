import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class EditProjectForm extends Component {

    constructor(props) {
        super(props);

        const { project } = props;
        this.state = {
            project: {}
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
        console.log(this.props)
        console.log(this.state)
        console.log('EDITING PROJECT!!!')
        return (
            <div>
                <span className="card-title h4 my-auto"><i className="fa fa-file-text-o fa-lg"></i> Edit Project</span>


                {/* <form>
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
                <button>Cancel</button>
                <button 
                    onClick={this.handleSubmit}
                >Save changes</button>
                </form> */}
            </div>
        );
    }
}

// AddProject.propTypes = {
//     handleAddProject: PropTypes.func
// }

export default EditProjectForm;