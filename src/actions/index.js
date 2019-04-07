import { createAction } from 'redux-actions';
import axios from 'axios';

export const request = createAction('REQUEST');
export const success = createAction('ADD_SUCCESS');
export const failure = createAction('FAILURE');

export const addMessage = createAction('MESSAGE_ADD');
export const addMessageServer = (data, currentChannelId, reset) => async (dispatch) => {
  dispatch(request());
  try {
    await axios.post(`/api/v1/channels/${currentChannelId}/messages`, { data });
    dispatch(success());
    reset();
  } catch (e) {
    dispatch(failure());
    throw e;
  }
};

export const changeChannel = createAction('CHANNEL_CHANGE');
export const addChannel = createAction('CHANNEL_ADD');
export const addChannelServer = (data, reset) => async (dispatch) => {
  dispatch(request());
  try {
    await axios.post('/api/v1/channels/', { data });
    dispatch(success());
    reset();
  } catch (e) {
    dispatch(failure());
    throw e;
  }
};

export const deleteChannel = createAction('CHANNEL_DELETE');
export const deleteChannelServer = id => async (dispatch) => {
  dispatch(request());
  try {
    await axios.delete(`/api/v1/channels/${id}`);
    dispatch(success());
  } catch (e) {
    dispatch(failure());
    throw e;
  }
};

export const renameChannel = createAction('CHANNEL_RENAME');
export const renameChannelServer = (id, data) => async (dispatch) => {
  dispatch(request());
  try {
    await axios.patch(`/api/v1/channels/${id}`, { data });
    dispatch(success());
  } catch (e) {
    dispatch(failure());
    throw e;
  }
};

export const modalOpen = createAction('MODAL_OPEN');
