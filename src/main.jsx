import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blogApp from './reducers/index.js';
import App from './components/App.jsx';
import './style.scss';

let store = createStore(blogApp);
// var post = [{topic: 'Соданный пост 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nesciunt explicabo earum perferendis ea, minima numquam repudiandae, deleniti porro eligendi modi nulla, voluptas iure ipsa.'}]
// localStorage.setItem('Posts', JSON.stringify(post));  

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app')
);