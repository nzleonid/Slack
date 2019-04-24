import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';


export const addMessage = createAction('MESSAGE_ADD');
export const addMessageToServer = (data, currentChannelId) => async () => {
  await axios.post(routes.messagesUrl(currentChannelId), { data });
};

export const changeChannel = createAction('CHANNEL_CHANGE');
export const addChannel = createAction('CHANNEL_ADD');
export const addChannelToServer = data => async () => {
  await axios.post(routes.channelsUrl(), { data });
};

export const deleteChannel = createAction('CHANNEL_DELETE');
export const deleteChannelToServer = id => async () => {
  await axios.delete(routes.channelIdUrl(id));
};

export const renameChannel = createAction('CHANNEL_RENAME');
export const renameChannelToServer = (id, data) => async () => {
  await axios.patch(routes.channelIdUrl(id), { data });
};

export const modalOpen = createAction('MODAL_OPEN');
