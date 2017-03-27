import { AppContainer } from 'react-hot-loader'; // required  
import React from 'react';  
import {render} from 'react-dom';  
import App from './containers/App.js'; // App

renderWithHotReload(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App.js', () => {
    const App = require('./containers/App.js').default;
    renderWithHotReload(App);
  });
}

function renderWithHotReload(App) {
  render (
      <App />
    , document.getElementById('starter')
  );
}