import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blogApp from './reducers/index.js';
import App from './components/App.jsx';
import './style.scss';

let store = createStore(blogApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app')
);