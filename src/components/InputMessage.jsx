import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';
import UsernameContext from '../UsernameContext';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};
@connect(mapStateToProps, actions)
@reduxForm({ form: 'InputMessage' })

class InputMessage extends React.Component {
  sendMessage = username => (value) => {
    const { reset, sendMessage, currentChannelId } = this.props;
    const data = {
      attributes: {
        id: _.uniqueId(),
        message: value.text,
        username,
      },
    };
    sendMessage(data, currentChannelId, reset);
  }

  render() {
    const {
      submitting, pristine, handleSubmit,
    } = this.props;
    return (
      <UsernameContext.Consumer>
        {username => (
          <form onSubmit={handleSubmit(this.sendMessage(username))}>
            <div className="form-group">
              <div className="input-group">
                <Field name="text" className="form-control" required disabled={submitting} component="input" type="text" placeholder="message..." />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-dark" disabled={pristine || submitting}>Send</button>
                </div>
              </div>
            </div>
          </form>
        )}
      </UsernameContext.Consumer>
    );
  }
}

export default InputMessage;
