import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

const mapStateToProps = ({ currentChannelId, messages }) => {
  const { byId, allIds } = messages;
  const props = {
    currentChannelId,
    messages: allIds.map(id => byId[id]),
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
    const { messages, currentChannelId } = this.props;
    return (
      <div className="tab-content">
        {this.renderMessages(messages, currentChannelId)}
      </div>
    );
  }
}

export default Message;
