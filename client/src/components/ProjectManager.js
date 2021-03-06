import React, { Component } from 'react';
import Modal from 'react-modal';
import './ProjectManager.css';
import './Modal.css';

import Header from './Header';
// import Footer from './components/Footer/Footer';
import AddProjectForm from './AddProject';

// import Searchbar from './Searchbar';
// import NotesListViewSelector from './NotesListViewSelector';
import NoteCard from './NoteCard';

import * as apiCalls from '../api';

const API_URL = '/api/projects/';

Modal.setAppElement('#root');

class ProjectManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            isAddProjectModalOpen: false,
        };

        this.addProject = this.addProject.bind(this);

        this.openAddModal = this.openAddModal.bind(this);
        this.closeAddModal = this.closeAddModal.bind(this);
    }

    // DEFINE FUNCTIONS
    componentWillMount() {
        this.loadProjects();
    }

    // API HANDLERS
    // SHOW ALL
    async loadProjects() {
        let projects = await apiCalls.getProjects();
        this.setState({projects});
    }
    // ADD ONE
    async addProject(item) {
        console.log('Adding new project', item);
        let newProject = await apiCalls.createProject(item);
        this.setState({projects: [newProject,...this.state.projects]})
    }
    // PATCH ONE
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

    // DELETE ONE
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

    // RENDER COMPONENT
    render() {
        const projects = this.state.projects.map((p) => (
            <NoteCard
                key={p._id}
                {...p}
                onDelete={this.deleteProject.bind(this, p._id)}
                onComplete={this.toggleComplete.bind(this, p)}
            />
        ));
        
        return (
            <div style={{backgroundColor: '#f7f7f9'}}>
                <Header />
                <main className="container-fluid mt-5 main-container">
                    {/* <Searchbar /> */}
                    {/* <AddNote /> */}

                    {/* BUTTON TO ADD NEW PROJECT */}
                    <div className="text-center mt-4 mb-4">
                        <button 
                            type="button" 
                            className="btn btn-primary teal lighten-2 btn-lg" 
                            onClick={this.openAddModal}
                        >
                            Add New Project
                        </button>
                    </div>

                    {/* MODAL ADD */}
                    <Modal 
                        overlayClassName="Overlay"
                        className="Modal"
                        isOpen={this.state.isAddProjectModalOpen}
                    >
                        <AddProjectForm
                            addProject={this.addProject}
                            closeModal={this.closeAddModal}
                        />
                    </Modal>
                    {/* /MODAL ADD */}
                    
                    {/* <NotesListViewSelector /> */}

                    {/* CARD GRID */}
                    <div className="row justify-content-center mb-4">
                        {projects}
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default ProjectManager;