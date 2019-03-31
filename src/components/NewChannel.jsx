import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};
@connect(mapStateToProps, actions)
@reduxForm({ form: 'AddChannel' })

class NewChannel extends React.Component {
  addChannel = (value) => {
    const { reset, createChannel } = this.props;
    const data = {
      attributes: {
        name: value.text,
      },
    };
    createChannel(data, reset);
  }

  render() {
    const {
      submitting, pristine, handleSubmit,
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.addChannel)}>
        <div className="form-group mt-3">
          <div className="input-group">
            <Field name="text" className="form-control" required disabled={submitting} component="input" type="text" placeholder="channel name" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-dark" disabled={pristine || submitting}>Add</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default NewChannel;
