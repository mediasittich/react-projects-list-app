import React, { Component } from 'react';
import Modal from 'react-modal';
import './ProjectManager.css';

import AddProjectForm from './AddProject';
import EditProjectForm from './EditProject';

// import Searchbar from './Searchbar';
// import NotesListViewSelector from './NotesListViewSelector';
import NoteCard from './NoteCard';

import * as apiCalls from '../api';

const API_URL = '/api/projects/';

Modal.setAppElement('#root');

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, .5)';
Modal.defaultStyles.content.borderRadius = '.25rem';
Modal.defaultStyles.content.padding = '0';
Modal.defaultStyles.content.width = 'auto';
Modal.defaultStyles.content.bottom = 'auto';

class ProjectManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            selectedProject: null,
            isAddProjectModalOpen: false,
            isEditProjectModalOpen: false
        };

        this.addProject = this.addProject.bind(this);
        this.openAddModal = this.openAddModal.bind(this);
        this.closeAddModal = this.closeAddModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
    }

    // DEFINE FUNCTIONS
    componentWillMount() {
        this.loadProjects();
    }

    // API handlers
    async loadProjects() {
        let projects = await apiCalls.getProjects();
        this.setState({projects});
    }

    getProject(id) {
        const showOneURL = API_URL + id;
        fetch(showOneURL)
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
            .then((res) => console.log('my project to edit'))
    }

    async addProject(item) {
        console.log('Adding new project', item);
        let newProject = await apiCalls.createProject(item);
        this.setState({projects: [newProject,...this.state.projects]})
    }

    toggleComplete(project) {
        const updateURL = API_URL + project._id;

        fetch(updateURL, {
            method: 'PATCH',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({completed: !project.completed})
            })
            .then(res => {
                if (!res.ok) {
                    if (res.status >= 400 && res.status < 500) {
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
                const projects = this.state.projects.map(p => (
                    (p._id === updatedProject._id)
                    ? {...p, completed: !p.completed}
                    : p
                ));
                this.setState({projects: projects});
            });

    }

    editProject(project) {
        console.log(project)
    }

    deleteProject(id) {
        const deleteURL = API_URL + id;

        fetch(deleteURL, {
            method: 'DELETE'
            })
            .then(res => {
                if (!res.ok) {
                    if (res.status >= 400 && res.status < 500) {
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
            .then(() => {
                const projects = this.state.projects.filter(project => project._id !== id);
                this.setState({projects: projects});
            });
    }

    // MODAL HANDLERS
    openAddModal = () => {
        this.setState({
            isAddProjectModalOpen: true
        });
    }
    closeAddModal = () => {
        this.setState({
            isAddProjectModalOpen: false
        });
    }
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
        const projects = this.state.projects.map((p) => (
            <NoteCard
                key={p._id}
                {...p}
                onDelete={this.deleteProject.bind(this, p._id)}
                onComplete={this.toggleComplete.bind(this, p)}
                onEdit={this.openEditModal.bind(this, p)}
                editProject={this.editProject.bind(this, p)}
            />
        ));
        
        // const editableProjects = this.state.projects.map((p) => (
        //     let editableProject = p
        // ));
        console.log(this.state.projects)
        // console.log(this.state)
        return (
            <main className="container mt-5 main-container">
                {/* <Searchbar /> */}
                {/* <AddNote /> */}
                <div className="text-center mt-4 mb-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.openAddModal}>Add New Project</button>
                </div>
                
                <Modal isOpen={this.state.isAddProjectModalOpen}>
                    <AddProjectForm addProject={this.addProject} closeModal={this.closeAddModal} />
                </Modal>

                <Modal isOpen={this.state.isEditProjectModalOpen}>
                    <span style={{cursor: 'pointer'}} onClick={this.closeEditModal}> X </span>
                    <EditProjectForm />
                </Modal>
                
                {/* <NotesListViewSelector /> */}

                <div className="card-columns mb-4" style={{columnCount: '2'}}>
                    {projects}
                </div>
            </main>
        );
    }
}

export default ProjectManager;