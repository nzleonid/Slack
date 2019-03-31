import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

const mapStateToProps = ({ messages }) => {
  const props = {
    messages,
  };
  return props;
};
@connect(mapStateToProps)

class RenderMessages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <>
        <Message messages={messages} />
      </>
    );
  }
}

export default RenderMessages;
