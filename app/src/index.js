import { AppContainer } from 'react-hot-loader'; // required  
import React from 'react';  
import {render} from 'react-dom';  
//import App from './containers/App.js'; // App
import IndexPage from './containers/IndexPage.js';

renderWithHotReload(IndexPage);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/IndexPage.js', () => {
    const IndexPage = require('./containers/IndexPage.js').default;
    renderWithHotReload(IndexPage);
  });
}

function renderWithHotReload(IndexPage) {
  render (
      <IndexPage />
    , document.getElementById('starter')
  );
}