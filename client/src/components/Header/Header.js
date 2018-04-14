import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        <div className="navbar-brand">
                            <i className="fa fa-pencil-square-o fa-2x align-middle mr-2"></i>
                            <span className="align-middle">ProjectBox</span>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;