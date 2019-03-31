import { createAction } from 'redux-actions';
import axios from 'axios';

export const addMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addMessage = createAction('MESSAGE_ADD');
export const sendMessage = (data, currentChannelId, reset) => async (dispatch) => {
  dispatch(addMessageRequest());
  try {
    await axios.post(`/api/v1/channels/${currentChannelId}/messages`, { data });
    dispatch(addMessageSuccess());
    reset();
  } catch (e) {
    dispatch(addMessageFailure());
    throw e;
  }
};

export const createChannelRequest = createAction('CHANNEL_CREATE_REQUEST');
export const createChannelSuccess = createAction('CHANNEL_CREATE_SUCCESS');
export const createChannelFailure = createAction('CHANNEL_CREATE_FAILURE');

export const changeChannel = createAction('CHANNEL_CHANGE');
export const addChannel = createAction('CHANNEL_ADD');
export const createChannel = (data, reset) => async (dispatch) => {
  dispatch(createChannelRequest());
  try {
    await axios.post('/api/v1/channels/', { data });
    dispatch(createChannelSuccess());
    reset();
  } catch (e) {
    dispatch(createChannelFailure());
    throw e;
  }
};
