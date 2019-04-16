import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';

const mapStateToProps = ({ modal }) => {
  const props = {
    modal,
  };
  return props;
};
@connect(mapStateToProps, actions)
@reduxForm({ form: 'InputChannelName' })

class ModalDeleteChannel extends React.Component {
  modalClose = () => {
    const { modalOpen } = this.props;
    modalOpen({ show: false });
  }

  renameChannel = async (value) => {
    const { modal, modalOpen, renameChannelToServer } = this.props;
    const data = {
      attributes: {
        name: value.text,
      },
    };
    await renameChannelToServer(modal.id, data);
    modalOpen({ show: false });
  }

  render() {
    const { modal, submitting, handleSubmit } = this.props;
    return (
      <Modal show={modal.show === 'rename'} onHide={this.modalClose}>
        <Form onSubmit={handleSubmit(this.renameChannel)}>
          <Modal.Header closeButton>
            <Modal.Title>{modal.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Enter new channel name
            <Field name="text" className="form-control" required disabled={submitting} component="input" type="text" placeholder="new name..." />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" type="submit" disabled={submitting}>
              Rename
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>);
  }
}

export default ModalDeleteChannel;
