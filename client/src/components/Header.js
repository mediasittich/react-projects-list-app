import React from 'react';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark pink scrolling-navbar">
            <a className="navbar-brand" href="#"><strong><i className="fa fa-inbox fa-2x" aria-hidden="true"></i> ProjectBox</strong></a>
            <ul className="navbar-nav nav-flex-icons ml-auto">
                <li className="nav-item">
                    <a className="nav-link"><i className="fa fa-github"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><i className="fa fa-twitter"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><i className="fa fa-instagram"></i></a>
                </li>
            </ul>
        </nav>
    </header>  
)

export default Header;