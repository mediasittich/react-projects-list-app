import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mdbootstrap/css/mdb.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <App />,
document.getElementById('root'));
registerServiceWorker();
