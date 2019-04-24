import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';


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
    const currentMessage = _.omitBy(byId, (message => message.channelId === id));
    return {
      byId: currentMessage,
      allIds: allIds.filter(messageId => currentMessage[messageId]),
    };
  },
}, { byId: {}, allIds: [] });

const currentChannelId = handleActions({
  [actions.changeChannel](state, { payload: { id } }) {
    return id;
  },
}, 1);

const channels = handleActions({
  [actions.addChannel](state, { payload: { attributes } }) {
    const channelId = attributes.id;
    return {
      byId: { ...state.byId, [channelId]: attributes },
      allIds: [...state.allIds, channelId],
    };
  },
  [actions.deleteChannel](state, { payload: { id } }) {
    const { byId, allIds } = state;
    return {
      byId: _.omitBy(byId, id),
      allIds: allIds.filter(currentId => currentId !== id),
    };
  },
  [actions.renameChannel](state, { payload: { attributes } }) {
    const { byId, allIds } = state;
    const { id, name } = attributes;
    const renameChannel = { ...byId[id], name };
    return {
      byId: { ...byId, [id]: renameChannel },
      allIds,
    };
  },
}, { byId: {}, allIds: [] });

const modal = handleActions({
  [actions.modalOpen](state, { payload: { id, name, show } }) {
    return { id, name, show };
  },
}, {});

export default combineReducers({
  messages,
  currentChannelId,
  channels,
  modal,
  form: formReducer,
});
