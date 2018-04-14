import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
    render() {
        return (
            <section className="container">
                <div className="row mt-5">
                    <form class="col-xs-12 col-md-8 offset-md-2">
                        <div class="input-group mb-3 form-lg">
                            <input type="text" class="form-control form-control-lg" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-danger btn-lg" type="button">
                                    <i class="fa fa-search fa-lg"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Searchbar;