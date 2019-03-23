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

const messages = handleActions({
  [actions.addMessage](state, { payload: { attributes } }) {
    return [...state, attributes];
  },
}, []);

export default combineReducers({
  messages,
  addMessageState,
  form: formReducer,
});
