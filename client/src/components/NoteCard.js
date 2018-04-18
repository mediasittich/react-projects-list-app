import React, { Component } from 'react';
import Modal from 'react-modal';
import Moment from 'react-moment';

import './Modal.css';
import './ProjectCard.css';
// import EditProjectForm from './EditProject';
import EditProjectForm from './EditProjectsForm';

import * as apiCalls from '../api';

Modal.setAppElement('#root');

class ProjectCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
                id: this.props._id,
                title: this.props.title,
                content: this.props.content,
                created_date: this.props.created_date,
                updated_date: this.props.updated_date,
                completed: this.props.completed,
            

            isEditProjectModalOpen: false
        };

        this.truncateContent = this.truncateContent.bind(this);
        this.updateProject = this.updateProject.bind(this);

        this.handleEditSubmit = this.handleEditSubmit.bind(this);

        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
    }
    // DEFINE FUNCTIONS
    truncateContent = (str) => {
        if (!str) {
            return '...'
        }
        if (str.length > 100) {
            return str.substring(0, 100) + '...'
        }
        return str;
    }

    toggleEditComplete () {
        this.setState({
            
                completed: !this.state.completed
            
        })
    }
    onTitleChange = (val) => {
        this.setState({
                title: val
        });
    }
    onContentChange = (val) => {
        this.setState({
                content: val
        });
    }

    handleEditSubmit(event){
        event.preventDefault();
        this.setState({...this.state})
        console.log(this.state)
        const data = {
            id: this.state.id,
            title: this.state.title,
            content: this.state.content,
            created_date: this.state.created_date,
            updated_date: Date.now(),
            completed: this.state.completed
        }
        this.updateProject(data);
    }
    // API HANDLERS
    // UPDATE ONE
    async updateProject(projectToUpdate) {
        await apiCalls.updateProject(projectToUpdate);
    }

    // MODAL HANDLERS
    openEditModal = () => {
        this.setState({
            isEditProjectModalOpen: true
        });
    }
    closeEditModal = () => {
        this.setState({
            isEditProjectModalOpen: false
        });
    }

     // RENDER COMPONENT
    render() {
        // console.log(this.props)
        console.log(this.state.updated_date)
        const truncatedContent = this.truncateContent(this.state.content)
        return (
            <div className="col-auto mb-3">
                <div className="card card-custom" style={{width: '24rem'}}>
                    <div className="card-header" style={{backgroundColor: '#fff'}}>
                        <h4 className="card-title" style={{marginTop: '.5rem', marginBottom: '.5rem'}}>{this.state.title}</h4>
                    </div>
                    <button
                            className="ml-auto mr-3 danger-color custom-float-round"
                            onClick={this.props.onDelete}
                        >
                        <i
                            className="fa fa-trash align-middle mr-2"
                        ></i>
                    </button>
                    <div className="card-body">
                        <p className="card-text mt-3">{truncatedContent}</p>
                        <p>
                            <small className="text-muted">
                                <span>Last updated </span>
                                <Moment fromNow>{this.state.updated_date}</Moment>
                            </small>
                        </p>
                        <button 
                            type="button" 
                            className="btn btn-primary teal lighten-2"
                            onClick={this.openEditModal}
                        >
                            View
                        </button>

                        {/* MODAL EDIT */}
                        <Modal
                            overlayClassName="Overlay"
                            className="Modal"
                            isOpen={this.state.isEditProjectModalOpen}
                        >
                            <EditProjectForm
                                closeModal={this.closeEditModal}
                                {...this.props}
                                onComplete={this.toggleEditComplete}
                                onTitleChange={this.onTitleChange}
                                onContentChange={this.onContentChange}
                                handleEditSubmit={this.handleEditSubmit}
                                // onComplete={this.props.onComplete}
                            />
                        </Modal>
                        {/* /MODAL EDIT */}

                    </div>
                    <div className="card-footer text-center">
                        <button
                            type="button"
                            className={this.props.completed ? 'btn btn-success-custom': 'btn btn-primary-custom'} 
                            onClick={this.props.onComplete}
                        >
                            {this.props.completed ? 'Completed': 'Mark as Complete'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;