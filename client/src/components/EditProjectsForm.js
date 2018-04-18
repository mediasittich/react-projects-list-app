import React, { Component } from 'react';

const API_URL = '/api/projects/';

class EditProjectForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
                id: this.props._id,
                title: this.props.title,
                content: this.props.content,
                updated_date: Date.now(),
                completed: this.props.completed
            
        }
        // this.showProject = this.showProject.bind(this);
        // this.updateProject = this.updateProject.bind(this);

        // this.handleEditTitleChange = this.handleEditTitleChange.bind(this);
        // this.handleEditContentChange = this.handleEditContentChange.bind(this);
        // this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    // DEFINE FUNCTIONS
    // componentWillMount() {
        // this.showProject(this.props._id);
    // }

    // toggleEditComplete () {
    //     this.setState({
    //         completed: !this.state.completed
    //     })
    // }
    // handleEditTitleChange(event){
    //     this.setState({title: event.target.value});
    // }
    // handleEditContentChange(event){
    //     this.setState({content: event.target.value});
    // }
    // handleEditSubmit(event){
    //     event.preventDefault();
    //     this.setState({updated_date: Date.now()})
    //     console.log(this.state)
    //     this.updateProject(this.state);
    // }
    // API HANDLERS
    // SHOW ONE
    // showProject(id) {
    //     const showOneURL = API_URL + id;

    //     // console.log('project id', id)
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
    //         .then((currentProject) => {
    //             this.setState({...currentProject})
    //             // console.log('Project data loaded')
    //         })
    // }

    // UPDATE ONE
    // updateProject(projectToUpdate) {
    //     const updateOneURL = API_URL + projectToUpdate.id;

    //     fetch(updateOneURL, {
    //         method: 'PUT',
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify(projectToUpdate)
    //     })
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
    //         .then((updatedProject) => {
    //             this.setState({...updatedProject});
    //         });
    // }
    updateTitle = (e) => {
        console.log(e.target.value);
        this.props.onTitleChange(e.target.value);
        this.setState({
            
                title: e.target.value
            
        });
    }

    render() {
        // console.log(this.props)
        // console.log(this.state)
        return (
            <form>
                <header className="Modal__header">
                    <h5 className="Modal__title">Edit Project</h5>
                    <button
                        className="Modal__closeBtn"
                        onClick={this.props.closeModal}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </header>
                <section className="Modal__body">
                    <div className="text-center">
                        <button
                            type="button"
                            className={this.state.completed ? 'btn btn-success': 'btn btn-primary'} 
                            // onClick={this.toggleEditComplete.bind(this)}
                        >
                            {this.state.completed ? 'Reactivate': 'Mark as Complete'}
                        </button>
                    </div>
                    <div className="md-form mb-3">
                        <input 
                            className="form-control"
                            type="text"
                            // defaultValue={this.state.title} 
                            onChange={this.updateTitle}
                            value={this.state.title}
                        />
                        {/* <label>Project title</label> */}
                    </div>
                    <div className="md-form">
                        <textarea 
                            type="text"
                            className="md-textarea form-control"
                            name="content" 
                            id="content" 
                            cols="30" 
                            rows="3"
                            defaultValue={this.state.content}
                            // onChange={this.handleEditContentChange}
                        ></textarea>
                        {/* <label>Short outline of your awesome ideas...</label> */}
                    </div>
                </section>
                <footer className="Modal__footer">
                    <button 
                        className="btn btn-light waves-effect waves-light"
                        onClick={this.props.closeModal}
                    >Close</button>
                    <button
                        className="btn btn-danger waves-effect waves-light"
                        onClick={this.props.handleEditSubmit}
                    >Save Changes</button>
                </footer>
            </form>
        );
    }
}

export default EditProjectForm;