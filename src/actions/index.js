import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const addMessageRequest = createAction('ADD_MESSAGE_REQUEST');
export const addMessageSuccess = createAction('ADD_MESSAGE_SUCCESS');
export const addMessageFailure = createAction('ADD_MESSAGE_FAILURE');

export const channelEditingRequest = createAction('CHANNEL_EDITING_REQUEST');
export const channelEditingSuccess = createAction('CHANNEL_EDITING_SUCCESS');
export const channelEditingFailure = createAction('CHANNEL_EDITING_FAILURE');

export const addMessage = createAction('MESSAGE_ADD');
export const addMessageToServer = (data, currentChannelId) => async (dispatch) => {
  dispatch(addMessageRequest());
  try {
    await axios.post(routes.messagesUrl(currentChannelId), { data });
    dispatch(addMessageSuccess());
  } catch (e) {
    dispatch(addMessageFailure());
    throw e;
  }
};

export const changeChannel = createAction('CHANNEL_CHANGE');
export const addChannel = createAction('CHANNEL_ADD');
export const addChannelToServer = data => async (dispatch) => {
  dispatch(channelEditingRequest());
  try {
    await axios.post(routes.channelsUrl(), { data });
    dispatch(channelEditingSuccess());
  } catch (e) {
    dispatch(channelEditingFailure());
    throw e;
  }
};

export const deleteChannel = createAction('CHANNEL_DELETE');
export const deleteChannelToServer = id => async (dispatch) => {
  dispatch(channelEditingRequest());
  try {
    await axios.delete(routes.channelIdUrl(id));
    dispatch(channelEditingSuccess());
  } catch (e) {
    dispatch(channelEditingFailure());
    throw e;
  }
};

export const renameChannel = createAction('CHANNEL_RENAME');
export const renameChannelToServer = (id, data) => async (dispatch) => {
  dispatch(channelEditingRequest());
  try {
    await axios.patch(routes.channelIdUrl(id), { data });
    dispatch(channelEditingSuccess());
  } catch (e) {
    dispatch(channelEditingFailure());
    throw e;
  }
};

export const modalOpen = createAction('MODAL_OPEN');
