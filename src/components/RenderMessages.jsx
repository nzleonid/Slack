import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Message from './Message';

const mapStateToProps = ({ messages }) => {
  const props = {
    messages,
  };
  return props;
};
@connect(mapStateToProps, actions)

class RenderMessages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <>
        {messages.map(message => <Message key={message.id} message={message} />)}
      </>
    );
  }
}

export default RenderMessages;
