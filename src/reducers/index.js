import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const requestState = handleActions({
  [actions.request]() {
    return 'requested';
  },
  [actions.failure]() {
    return 'failed';
  },
  [actions.success]() {
    return 'finished';
  },
}, 'none');

const messages = handleActions({
  [actions.addMessage](state, { payload: { attributes } }) {
    const messageId = attributes.id;
    return {
      byId: { ...state.byId, [messageId]: attributes },
      allIds: [...state.allIds, messageId],
    };
  },
  [actions.deleteChannel](state, { payload: { id } }) {
    const { byId, allIds } = state;
    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
}, { byId: {}, allIds: [] });

const currentChannelId = handleActions({
  [actions.changeChannel](state, { payload: { id } }) {
    return id;
  },
}, 1);

const newChannels = handleActions({
  [actions.addChannel](state, { payload: { attributes } }) {
    return [...state, attributes];
  },
  [actions.deleteChannel](state, { payload: { id } }) {
    const newChannelList = state.filter(channel => channel.id !== id);
    return newChannelList;
  },
  [actions.renameChannel](state, { payload: { attributes } }) {
    const rename = state.map(channel => (channel.id === attributes.id ? attributes : channel));
    return rename;
  },
}, []);

const modal = handleActions({
  [actions.modalOpen](state, { payload: { id, name, show } }) {
    return { id, name, show };
  },
}, {});

export default combineReducers({
  messages,
  requestState,
  currentChannelId,
  newChannels,
  modal,
  form: formReducer,
});
