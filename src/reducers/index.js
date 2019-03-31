import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const addMessageState = handleActions({
  [actions.addMessageRequest]() {
    return 'requested';
  },
  [actions.addMessageFailure]() {
    return 'failed';
  },
  [actions.addMessageSuccess]() {
    return 'finished';
  },
}, 'none');

const createChannelState = handleActions({
  [actions.createChannelRequest]() {
    return 'requested';
  },
  [actions.createChannelFailure]() {
    return 'failed';
  },
  [actions.createChannelSuccess]() {
    return 'finished';
  },
}, 'none');

const messages = handleActions({
  [actions.addMessage](state, { payload: { attributes } }) {
    return [...state, attributes];
  },
}, []);

const currentChannelId = handleActions({
  [actions.changeChannel](state, { payload: { id } }) {
    return id;
  },
}, 1);

const newChannels = handleActions({
  [actions.addChannel](state, { payload: { attributes } }) {
    return [...state, attributes];
  },
}, []);

export default combineReducers({
  messages,
  addMessageState,
  createChannelState,
  currentChannelId,
  newChannels,
  form: formReducer,
});
