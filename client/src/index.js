import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import 'typeface-roboto'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mdbootstrap/css/mdb.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
document.getElementById('root'));
registerServiceWorker();
