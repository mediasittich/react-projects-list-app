import React, { Component } from 'react';
import { Link } from 'react-router-dom'
  
import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <div className="view d-flex justify-content-center align-items-center teal lighten-2">
                <div className="container">
                    <div className="text-center text-white">
                    <i className="fa fa-inbox fa-4x" aria-hidden="true"></i>
                    <h1>ProjectBox</h1>
                        <button className="btn"><Link to="/signup">Sign Up</Link></button>
                        <button className="btn"><Link to="/login">Login</Link></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;