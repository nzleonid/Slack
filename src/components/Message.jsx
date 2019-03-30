import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)

class Message extends React.Component {
  render() {
    const { messages, currentChannelId } = this.props;
    const className = channelId => cn({
      'tab-pane': true,
      active: channelId === currentChannelId,
    });
    return (
      <div className="tab-content">
        {messages.map(({
          id, message, username, channelId,
        }) => (
          <div className={className(channelId)} key={id}>{`${username}: ${message}`}</div>
        ))}
      </div>
    );
  }
}

export default Message;
