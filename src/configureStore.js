import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage.js'
import blogApp from './reducers/index.js';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(blogApp, persistedState);

  store.subscribe( throttle(() => {
    saveState({
      posts: store.getState().posts
    });
  }), 1000);

  return store;
};

export default configureStore;