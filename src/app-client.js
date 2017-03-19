/* global window, document */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';

const AppClient = () => (
  <Router>
    <App />
  </Router>
);


// console.log('starting...', React, ReactDOM);
// console.log(<AppClient />, document.getElementById('app'));
ReactDOM.render(<AppClient />, document.getElementById('app'));
