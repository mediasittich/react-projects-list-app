import React, { Component } from 'react';

const NoteCard = (props) => (
    
    <div className="card">
        <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
                <h5 className="card-title">{props.title}</h5>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="defaultCheck1" 
                    />
                </div>
            </div>
            
            <p className="card-text">{props.content}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            <p><span className="badge badge-pill badge-info">Tag</span></p>

            <a className="btn btn-light">View</a>
            {/* <button className="btn btn-success">Edit</button>
            <button className="btn btn-danger">Delete</button> */}
        </div>
    </div>

)
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