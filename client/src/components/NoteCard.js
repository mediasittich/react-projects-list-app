import React from 'react';

const truncate = (str) => {
    if (!str) {
        return '...'
    }
    if (str.length > 50) {
        return str.substring(0, 50) + '...'
    }
    return str;
}

const NoteCard = (props) => {
    console.log(props);
    const truncatedContent = truncate(props.content);
    return (

        // <div>
        //     <button className="btn btn-danger" onClick={props.onDelete}>
        //         <i className="fa fa-trash align-middle mr-2"></i>
        //     </button>
        //     
        // </div>

        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <hr />
                <p className="card-text">{truncatedContent}</p>
                <p><small className="text-muted">Last updated 3 mins ago</small></p>
                <button 
                    type="button" 
                    className="btn btn-light"
                    // projectdata={props}
                    onClick={props.onEdit}
                    onLoad={props.editProject}
                >
                    Edit
                </button>
            </div>
            <div className="card-footer text-center">
                <button
                    type="button"
                    className={props.completed ? 'btn btn-success': 'btn btn-primary'} 
                    onClick={props.onComplete}
                >
                    {props.completed ? 'Reactivate': 'Mark as Complete'}
                </button>
            </div>
        </div>
    );
}
// class NoteCard extends Component {
//     render() {
//         return (
//             <div className="card">
//                 <div className="card-body">
//                     <div className="d-flex flex-row justify-content-between">
//                         <h5 className="card-title">Card title</h5>
//                         <div className="form-check">
//                             <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
//                         </div>
//                     </div>
                    
//                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                     <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                     <p><span class="badge badge-pill badge-info">Tag</span></p>

//                     <a href="#" className="btn btn-primary">Edit</a>
//                     <a href="#" className="btn btn-danger">Delete</a>
//                 </div>
//             </div>
//         );
//     }
// }

export default NoteCard;