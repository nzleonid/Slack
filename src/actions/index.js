import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';


export const addMessage = createAction('MESSAGE_ADD');
export const addMessageToServer = (data, currentChannelId) => async () => {
  try {
    await axios.post(routes.messagesUrl(currentChannelId), { data });
  } catch (e) {
    throw e;
  }
};

export const changeChannel = createAction('CHANNEL_CHANGE');
export const addChannel = createAction('CHANNEL_ADD');
export const addChannelToServer = data => async () => {
  try {
    await axios.post(routes.channelsUrl(), { data });
  } catch (e) {
    throw e;
  }
};

export const deleteChannel = createAction('CHANNEL_DELETE');
export const deleteChannelToServer = id => async () => {
  try {
    await axios.delete(routes.channelIdUrl(id));
  } catch (e) {
    throw e;
  }
};

export const renameChannel = createAction('CHANNEL_RENAME');
export const renameChannelToServer = (id, data) => async () => {
  try {
    await axios.patch(routes.channelIdUrl(id), { data });
  } catch (e) {
    throw e;
  }
};

export const modalOpen = createAction('MODAL_OPEN');
