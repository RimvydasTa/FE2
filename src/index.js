import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducerContainer from './reducers';
import Thunk from 'redux-thunk';
import './assets/style.scss';
import App from './components/App';

const store = createStore(
    reducerContainer,
  applyMiddleware(Thunk),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
