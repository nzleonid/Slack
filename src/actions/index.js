import { createAction } from 'redux-actions';
import axios from 'axios';

export const addMessageRequest = createAction('TASK_REMOVE_REQUEST');
export const addMessageSuccess = createAction('TASK_REMOVE_SUCCESS');
export const addMessageFailure = createAction('TASK_REMOVE_FAILURE');

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

export const changeChannel = createAction('CHANNEL_CHANGE');
