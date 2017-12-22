import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage.js'
import blogApp from './reducers/index.js';
import App from './components/App.jsx';
import './style.scss';

const persistedState = loadState();
const store = createStore(blogApp, persistedState);

store.subscribe( () => {
  saveState({
    posts: store.getState().posts
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app')
);