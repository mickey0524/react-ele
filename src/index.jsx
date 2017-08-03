import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import Main from './Component/App.jsx';

render(
  <Main />,
  document.body.appendChild(document.createElement('div'))
);