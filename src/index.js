import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import StyleGuide from './StyleGuide/StyleGuide';
import grid from 'Shared/styles/grid.scss';
import './index.scss';

ReactDOM.render(
  <Router>
    <div className={grid.row}>
      <Route exact path="/" component={App} />
      <Route path="/styleguide" component={StyleGuide} />
    </div>
  </Router>
  , document.getElementById('root')
);
