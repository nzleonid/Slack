import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

import React from 'react';
import { render } from 'react-dom';
import gon from 'gon';
import faker from 'faker';
import cookies from 'js-cookie';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import io from 'socket.io-client';
import reducers from './reducers';
import App from './components/App';
import * as actions from './actions';
import UsernameContext from './UsernameContext';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const socket = io();
socket.on('newMessage', ({ data }) => store.dispatch(actions.addMessage(data)));

if (!cookies.get('name')) {
  cookies.set('name', faker.name.findName());
}
render(
  <Provider store={store}>
    <UsernameContext.Provider value={cookies.get('name')}>
      <App gon={gon} />
    </UsernameContext.Provider>
  </Provider>,
  document.getElementById('chat'),
);
