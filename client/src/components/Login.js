import React, { Component } from 'react';
import './Intro.css'

class Login extends Component {
    render() {
        return (
            <div className="view d-flex justify-content-center align-items-center teal lighten-2">
                <div className="container">
                    <div className="text-center">
                        <h1 className="text-white mb-5">This will be the Intro Page.</h1>
                        <div className="card" style={{maxWidth: '400px', margin: 'auto'}}>
                            <div className="card-body">
                                <div className="auth-overlay mb-3">Sign Up</div>
                                <form className="pl-3 pr-3 mt-5">
                                    <div className="md-form">
                                        <input type="text" id="user[name]" name="user[name]" className="form-control" />
                                        <label htmlFor="user[name]" className="font-weight-light">Name</label>
                                    </div>

                                    <div className="md-form">
                                        <input type="email" id="user[email]" name="user[email]" className="form-control" />
                                        <label htmlFor="user[email]" className="font-weight-light">Email</label>
                                    </div>

                                    <div className="md-form">
                                        <input type="password" id="user[password]" name="user[password]" className="form-control" />
                                        <label htmlFor="user[password]" className="font-weight-light">Password</label>
                                    </div>

                                    <div className="py-4 mt-3">
                                        <button type="button" className="btn btn-teal teal lighten-2">Sign Up</button>
                                        <p className="font-small font-small-custom grey-text mt-3">You already have an account? <a className="dark-grey-text font-weight-bold">Log in</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;