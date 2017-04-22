import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import StyleGuide from './StyleGuide';
import './index.scss';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/styleguide" component={StyleGuide} />
    </div>
  </Router>
  , document.getElementById('root')
);
