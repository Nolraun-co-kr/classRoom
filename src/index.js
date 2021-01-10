import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './containers/RouterApp';

ReactDOM.render(
  <>
    <RouterApp />
  </>,
  document.getElementById('root')
);
