import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';
import App from './components/App.jsx';
import './style.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('react-app')
);