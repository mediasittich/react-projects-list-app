import React, { Component } from 'react';
import { Link } from 'react-router-dom'
  
import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <div className="view d-flex justify-content-center align-items-center teal lighten-2">
                <div className="container">
                    <div className="text-center text-white">
                        <section className="mb-3">
                            <i className="fa fa-inbox fa-4x" aria-hidden="true"></i>
                            <h1 style={{display: 'inline-block', fontSize: '3.8rem'}}>ProjectBox</h1>
                        </section>
                        
                        <section className="mt-3">
                            <Link className="intro-btn" to="/signup">Sign Up</Link>
                            <Link className="intro-btn" to="/login">Login</Link>
                        </section>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;