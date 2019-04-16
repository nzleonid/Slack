const root = '/api/v1/channels/';
export default {
  messagesUrl: channelId => `${root}${channelId}/messages`,
  channelsUrl: () => `${root}`,
  channelIdUrl: id => `${root}${id}`,
};
