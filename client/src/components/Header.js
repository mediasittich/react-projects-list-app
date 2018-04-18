import React from 'react';
import './Header.css'

const Header = () => (
    <header>
        <nav className="navbar navbar-custom navbar-expand-lg navbar-dark pink scrolling-navbar">
            <span className="navbar-brand navbar-brand-custom" href="#"><i className="fa fa-inbox fa-2x" aria-hidden="true"></i><strong> <h1>ProjectBox</h1></strong></span>
            <ul className="navbar-nav nav-flex-icons ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/mediasittich/react-projects-list-app"><i className="fa fa-github fa-2x"></i></a>
                </li>
            </ul>
        </nav>
    </header>  
)

export default Header;