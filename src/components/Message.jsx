import React from 'react';

class Message extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <>
        <div>{`${message.username}: ${message.message}`}</div>
      </>
    );
  }
}

export default Message;
