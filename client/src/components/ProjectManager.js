import React, { Component } from 'react';
import Modal from 'react-modal';

import AddProjectForm from './AddProject';
import EditProjectForm from './EditProject';

import Searchbar from './Searchbar';
import NotesListViewSelector from './NotesListViewSelector';
import NoteCard from './NoteCard';

import * as apiCalls from '../api';

const API_URL = '/api/projects';

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

    async loadProjects() {
        let projects = await apiCalls.getProjects();
        this.setState({projects});
    }

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

    // addProject(project) {
    //     this.setState({ isAddProjectModalOpen: false });
    //     console.log(this.state)
    //     const newProject = project;

    //     // if (!title || title.length === 0) {
    //     //     throw Error('Title is required');
    //     // }
    //     fetch(API_URL, {
    //         method: 'POST',
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify({project: newProject})
    //     })
    //         .then(res => {
    //             if (!res.ok) {
    //                 if (res.status >= 400 && res.status < 500) {
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
    //         .then(res => {
    //             this.state({projects: [...this.state.projects, newProject]})
    //         })
    // }

    addProject(newProject) {
        console.log('Adding new project', newProject);
        fetch(API_URL, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({newProject})
            })
            .then(res => {
                // console.log()
                console.log(res)
                console.log(newProject)
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
            .then(newProject => {
                // console.log(this.state.projects)
                console.log(newProject)
            })
            // .then(newProject => {
            //     this.state({projects: [...this.state.projects, newProject]})
            // })
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
                {/* <Modal isOpen={this.state.isEditProjectModalOpen}>Edit Form goes here</Modal> */}
                {/* <NotesListViewSelector /> */}

                <div className="card-deck mb-4">
                    {projects}
                </div>
            </main>
        );
    }
}

export default ProjectManager;