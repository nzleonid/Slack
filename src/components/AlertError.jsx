import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = ({ addMessageState }) => {
  const props = {
    addMessageState,
  };
  return props;
};
@connect(mapStateToProps, actions)

class AlertError extends React.Component {
  render() {
    const { addMessageState } = this.props;
    if (addMessageState !== 'failed') {
      return null;
    }
    return (
      <div className="alert alert-danger" role="alert">
        Network error
      </div>
    );
  }
}

export default AlertError;
