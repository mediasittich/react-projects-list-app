import React, { Component } from 'react';
import './EditProjects.css';
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
        // console.log(this.props)
        // console.log(this.state)
        // console.log('EDITING PROJECT!!!')
        const modalStyles = {
            modalHeaderStyles: {
                padding: '.75rem 1.25rem',
                marginBottom: '0',
                borderBottom: '1px solid #e9ecef',
                display: 'flex',
            },
            closeModalButtonStyles: {
                backgroundColor: 'transparent',
                padding: '1rem',
                margin: '-1.5rem -1rem -1rem auto',
                border: '0',
                float: 'right',
                fontSize: '1.2rem',
                fontWeight: '700',
                lineHeight: '1',
                color: '#000',
                textShadow: '0 1px 0 #fff',
                opacity: '.5',
                cursor: 'pointer'
            },
            closeModalButtonStyles: {
                backgroundColor: 'transparent',
                padding: '1rem',
                margin: '-1.5rem -1rem -1rem auto',
                border: '0',
                float: 'right',
                fontSize: '1.2rem',
                fontWeight: '700',
                lineHeight: '1',
                color: '#000',
                textShadow: '0 1px 0 #fff',
                opacity: '.5',
                cursor: 'pointer',
                '&:hover': {
                    opacity: '1'
                }
            },
            modalBodyStyles: {
                position: 'relative',
                padding: '1rem 4rem',
                flex: '1 1 auto'
            },
            modalFooterStyles: {
                padding: '1rem',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexWrap: 'wrap',
                borderTop: '1px solid #e9ecef'
            }
        }

        return (
            <div className="modal">
                <h1>This is my modal</h1>
                <header style={modalStyles.modalHeaderStyles}>
                    <h5 style={{marginBottom: '0'}}>Add New Project</h5>
                    <button
                        style={modalStyles.closeModalButtonStyles}
                        onClick={this.props.closeModal}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </header>
                {/* <span className="card-title h4 my-auto"><i className="fa fa-file-text-o fa-lg"></i> Edit Project</span> */}


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
                <button>Edit</button>
                <button>Cancel</button>
                <button 
                    onClick={this.handleSubmit}
                >Save changes</button>
                </form> */}
            </div>
        );
    }
}

export default EditProjectForm;