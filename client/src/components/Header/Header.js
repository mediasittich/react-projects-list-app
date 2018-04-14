import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div class="container">
                        <div class="navbar-brand">
                            <i class="fa fa-pencil-square-o fa-2x align-middle mr-2"></i>
                            <span class="align-middle">ProjectBox</span>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;