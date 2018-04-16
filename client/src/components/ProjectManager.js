import React, { Component } from 'react';
import Modal from 'react-modal';

import AddProjectForm from './AddProject';
import EditProjectForm from './EditProject';

// import Searchbar from './Searchbar';
// import NotesListViewSelector from './NotesListViewSelector';
import NoteCard from './NoteCard';

import * as apiCalls from '../api';

// const API_URL = '/api/projects';

Modal.setAppElement('#root');

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

    async addProject(item) {
        console.log('Adding new project', item);
        let newProject = await apiCalls.createProject(item);
        this.setState({projects: [newProject,...this.state.projects]})
    }

    // Modal handlers
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

    // RENDER COMPONENT
    render() {
        const projects = this.state.projects.map((p) => (
            <NoteCard
                key={p._id}
                {...p}
            />
        ));
        return (
            <main className="container mt-5 main-container">
                {/* <Searchbar /> */}
                {/* <AddNote /> */}
                <div className="text-center mt-4 mb-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.openAddModal}>Add New Note</button>
                </div>
                {/* Modals */}
                <Modal isOpen={this.state.isAddProjectModalOpen}>
                    Hello from Modal
                    <span style={{cursor: 'pointer'}} onClick={this.closeAddModal}> X </span>
                    <AddProjectForm addProject={this.addProject} />
                </Modal>
                <Modal isOpen={this.state.isEditProjectModalOpen}>Edit Form goes here
                    <EditProjectForm />
                </Modal>
                
                {/* <NotesListViewSelector /> */}

                <div className="card-deck mb-4">
                    {projects}
                </div>
            </main>
        );
    }
}

export default ProjectManager;