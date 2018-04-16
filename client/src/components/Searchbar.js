import React, { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <section className="container">
                <div className="row mt-5">
                    <form className="col-xs-12 col-md-8 offset-md-2">
                        <div className="input-group mb-3 form-lg">
                            <input type="text" className="form-control form-control-lg" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-danger btn-lg" type="button">
                                    <i className="fa fa-search fa-lg"></i>
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