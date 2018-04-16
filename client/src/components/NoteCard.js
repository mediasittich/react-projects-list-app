import React from 'react';

const truncate = (str) => {
    if (!str) {
        return '...'
    }
    if (str.length > 20) {
        return str.substring(0, 20) + '...'
    }
}

const NoteCard = (props) => {
    // console.log(props);
    const truncatedContent = truncate(props.content);
    return (
        <li style={{listStyleType: 'none', border: '1px solid gray', margin: '5px'}}>
            <button className="btn btn-danger" onClick={props.onDelete}>
                <i className="fa fa-trash align-middle mr-2"></i>
            </button>
            <h5 className="card-title">{props.title}</h5>
            <p>completed: {props.completed.toString()}</p>
            <p>{truncatedContent}</p>
            <p><small className="text-muted">Last updated 3 mins ago</small></p>
            <button type="button" className="btn btn-light">View</button>
            <button 
                type="button" 
                className="btn btn-success" 
                onClick={props.onComplete}
            >
                {props.completed ? 'Reactivate': 'Mark as Complete'}
            </button>
        </li>

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