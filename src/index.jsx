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
import normalizingState from './normalizingState';
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
const channels = normalizingState(gon.channels);
const messages = normalizingState(gon.messages);
const store = createStore(
  reducers,
  {
    channels,
    messages,
  },
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const socket = io();
socket.on('newMessage', ({ data }) => store.dispatch(actions.addMessage(data)));
socket.on('newChannel', ({ data }) => store.dispatch(actions.addChannel(data)));
socket.on('removeChannel', ({ data }) => store.dispatch(actions.deleteChannel(data)));
socket.on('renameChannel', ({ data }) => store.dispatch(actions.renameChannel(data)));

if (!cookies.get('name')) {
  cookies.set('name', faker.name.findName());
}
render(
  <Provider store={store}>
    <UsernameContext.Provider value={cookies.get('name')}>
      <App />
    </UsernameContext.Provider>
  </Provider>,
  document.getElementById('chat'),
);
