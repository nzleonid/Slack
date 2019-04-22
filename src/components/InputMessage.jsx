import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, InputGroup, Button } from 'react-bootstrap';
import _ from 'lodash';
import * as actions from '../actions';
import UsernameContext from '../UsernameContext';
import FormControlComponent from './FormControlComponent';


const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};
@connect(mapStateToProps, actions)
@reduxForm({ form: 'InputMessage' })

class InputMessage extends React.Component {
  constructor(props) {
    super(props);
    this.messageInput = React.createRef();
  }

  sendMessage = username => async (value) => {
    const { reset, addMessageToServer, currentChannelId } = this.props;
    const data = {
      attributes: {
        id: _.uniqueId(),
        message: value.text,
        username,
      },
    };
    await addMessageToServer(data, currentChannelId);
    reset();
    this.messageInput.current.focus();
  }

  render() {
    const {
      submitting, pristine, handleSubmit, submitFailed,
    } = this.props;
    return (
      <UsernameContext.Consumer>
        {username => (
          <Form onSubmit={handleSubmit(this.sendMessage(username))}>
            <InputGroup>
              <Field
                name="text"
                className="form-control"
                required
                disabled={submitting}
                isInvalid={submitFailed}
                component={FormControlComponent}
                type="text"
                placeholder="message..."
                autoComplete="off"
                autoFocus
                inputRef={this.messageInput}
              />
              <InputGroup.Append>
                <Button type="submit" className="btn btn-dark" disabled={pristine || submitting}>Send</Button>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                Network error
              </Form.Control.Feedback>
            </InputGroup>
          </Form>
        )}
      </UsernameContext.Consumer>
    );
  }
}

export default InputMessage;
