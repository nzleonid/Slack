import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, InputGroup, Button } from 'react-bootstrap';
import * as actions from '../actions';
import FormControlComponent from './FormControlComponent';


const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};
@connect(mapStateToProps, actions)
@reduxForm({ form: 'AddChannel' })

class NewChannel extends React.Component {
  addChannel = async (value) => {
    const { reset, addChannelToServer } = this.props;
    const data = {
      attributes: {
        name: value.text,
      },
    };
    await addChannelToServer(data);
    reset();
  }

  render() {
    const {
      submitting, pristine, handleSubmit, submitFailed,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.addChannel)}>
        <InputGroup className="mt-3">
          <Field
            name="text"
            className="form-control"
            required
            disabled={submitting}
            isInvalid={submitFailed}
            component={FormControlComponent}
            type="text"
            placeholder="channel name"
            autoComplete="off"
          />
          <InputGroup.Append>
            <Button type="submit" className="btn btn-dark" disabled={pristine || submitting}>Add</Button>
          </InputGroup.Append>
          <Form.Control.Feedback type="invalid">
            Network error
          </Form.Control.Feedback>
        </InputGroup>
      </Form>
    );
  }
}

export default NewChannel;
