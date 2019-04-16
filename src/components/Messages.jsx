import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

const mapStateToProps = ({ currentChannelId, messages }) => {
  const { byId, allIds } = messages;
  const currentMessages = allIds.map(id => byId[id]);
  const props = {
    currentChannelId,
    currentMessages,
  };
  return props;
};

@connect(mapStateToProps)

class Message extends React.Component {
  renderMessages = (messages, currentChannelId) => {
    const className = channelId => cn({
      'tab-pane': true,
      active: channelId === currentChannelId,
    });
    return messages.map(({
      id, message, username, channelId,
    }) => (
      <div className={className(channelId)} key={id}>{`${username}: ${message}`}</div>
    ));
  }

  render() {
    const { currentMessages, messagesFromServer, currentChannelId } = this.props;
    return (
      <div className="tab-content">
        {this.renderMessages(messagesFromServer, currentChannelId)}
        {this.renderMessages(currentMessages, currentChannelId)}
      </div>
    );
  }
}

export default Message;
