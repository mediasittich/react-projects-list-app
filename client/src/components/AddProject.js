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
            <div>
                <header style={modalStyles.modalHeaderStyles}>
                    <h5 style={{marginBottom: '0'}}>Add New Project</h5>
                    <button
                        style={modalStyles.closeModalButtonStyles}
                        onClick={this.props.closeModal}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </header>
                <section style={modalStyles.modalBodyStyles}>
                    <div className="md-form mb-3">
                        <input 
                            className="form-control"
                            type="text"
                            value={this.state.title} 
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
                            value={this.state.content}
                            onChange={this.handleContentChange}
                        ></textarea>
                        <label>Short outline of your awesome ideas...</label>
                    </div>
                </section>
                <footer style={modalStyles.modalFooterStyles}>
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

export default AddProjectForm;