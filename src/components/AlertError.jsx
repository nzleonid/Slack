import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = ({ requestState }) => {
  const props = {
    requestState,
  };
  return props;
};
@connect(mapStateToProps, actions)

class AlertError extends React.Component {
  render() {
    const { requestState } = this.props;
    if (requestState !== 'failed') {
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
