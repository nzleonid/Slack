import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import * as actions from '../actions';

const mapStateToProps = ({ modal }) => {
  const props = {
    modal,
  };
  return props;
};
@connect(mapStateToProps, actions)

class ModalDeleteChannel extends React.Component {
  modalClose = () => {
    const { modalOpen } = this.props;
    modalOpen({ show: false });
  }

  deleteChannel = () => {
    const { modal, modalOpen, deleteChannelServer } = this.props;
    deleteChannelServer(modal.id);
    modalOpen({ show: false });
  }

  render() {
    const { modal } = this.props;
    return (
      <Modal show={modal.show === 'delete'} onHide={this.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modal.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the channel?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" type="submit" onClick={this.deleteChannel}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>);
  }
}

export default ModalDeleteChannel;
