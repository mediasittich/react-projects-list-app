import React, { Component } from 'react';
import Modal from 'react-modal';

import './Modal.css';
// import EditProjectForm from './EditProject';
import EditProjectForm from './EditProjectsForm';


// const getProject(id) {
//     const showOneURL = API_URL + id;
//     fetch(showOneURL)
//         .then(res => {
//             if(!res.ok) {
//                 if(res.status >= 400 && res.status < 500) {
//                     return res.json().then(data => {
//                         let err = {errorMessage: data.message};
//                         throw err;
//                     })
//                 } else {
//                     let err = {errorMessage: 'Please try again later. Server is not responding.'};
//                     throw err;
//                 }
//             }
//             return res.json();
//         })
//         .then((res) => console.log('my project to edit'))
// }
const floatButtonStyles = {
    buttonStyles: {
        // backgroundColor: 'pink',
        borderRadius: '50%',
        boxShadow: '0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'block',
        fontSize: '16px',
        height: '47px',
        lineHeight: '24px',
        margin: '-1.44rem ',
        overflow: 'hidden',
        padding: '0',
        position: 'relative',
        textAlign: 'left',
        transitionDelay: '0s',
        transitionDuration: '.2s',
        transitionProperty: 'all',
        transitionTimingFunction: 'ease-in-out',
        verticalAlign: 'middle',
        width: '47px',
        zIndex: '1'
    },
    iconStyles: {
        boxSizing: 'border-box',
        color: '#fff',
        display: 'inline-block',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '47px',
        textAlign: 'center',
        width: '47px'
    }
}

Modal.setAppElement('#root');

const API_URL = '/api/projects/';

class ProjectCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            project: {
                id: this.props._id,
                title: this.props.title,
                content: this.props.content,
                updated_date: Date.now(),
                completed: this.props.completed
            },

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
        if (str.length > 50) {
            return str.substring(0, 50) + '...'
        }
        return str;
    }

    handleEditSubmit(event){
        event.preventDefault();
        this.setState({...this.state.project})
        console.log(this.state)
        this.updateProject(this.state.project);
    }
    // API HANDLERS
    // UPDATE ONE
    updateProject(projectToUpdate) {
        const updateOneURL = API_URL + projectToUpdate.id;

        fetch(updateOneURL, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(projectToUpdate)
        })
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
            .then((updatedProject) => {
                this.setState({...updatedProject});
            });
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
        console.log(this.state)
        return (
            <div className="card">
                <div className="card-header" style={{backgroundColor: '#fff'}}>
                    <h4 className="card-title" style={{marginTop: '.5rem', marginBottom: '.5rem'}}>{this.props.title}</h4>
                </div>
                <button
                        className="ml-auto mr-3 pink"
                        style={floatButtonStyles.buttonStyles}
                        onClick={this.props.onDelete}
                    >
                    <i
                        className="fa fa-trash align-middle mr-2"
                        style={floatButtonStyles.iconStyles}
                    ></i>
                </button>
                <div className="card-body">
                    <p className="card-text">{this.props.content}</p>
                    <p><small className="text-muted">Last updated {this.props.created_date}</small></p>
                    <button 
                        type="button" 
                        className="btn btn-light"
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
                            handleEditSubmit={this.handleEditSubmit}
                            // onComplete={this.props.onComplete}
                        />
                    </Modal>
                    {/* /MODAL EDIT */}

                </div>
                <div className="card-footer text-center">
                    <button
                        type="button"
                        className={this.props.completed ? 'btn btn-success': 'btn btn-primary'} 
                        onClick={this.props.onComplete}
                    >
                        {this.props.completed ? 'Reactivate': 'Mark as Complete'}
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectCard;