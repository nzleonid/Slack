import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../actions';

const mapStateToProps = ({ currentChannelId, channels }) => {
  const { byId, allIds } = channels;
  const props = {
    currentChannelId,
    channels: allIds.map(id => byId[id]),
  };
  return props;
};
@connect(mapStateToProps, actions)

class Channels extends React.Component {
  changeChannel = id => () => {
    const { changeChannel } = this.props;
    changeChannel({ id });
  }

  deleteConfirmation = (id, name) => () => {
    const { modalOpen } = this.props;
    modalOpen({ show: 'delete', id, name });
  }

  renameConfirmation = (id, name) => () => {
    const { modalOpen } = this.props;
    modalOpen({ show: 'rename', id, name });
  }

  renderIcon = (id, name) => (
      <>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="float-right ml-2"
          onClick={this.deleteConfirmation(id, name)}
        />
        <FontAwesomeIcon
          className="float-right"
          icon={faEdit}
          onClick={this.renameConfirmation(id, name)}
        />
      </>
  );

  renderChannels = (channels, currentChannelId) => {
    const className = channelsId => cn({
      'list-group-item': true,
      'list-group-item-dark': true,
      'list-group-item-action': true,
      active: channelsId === currentChannelId,
    });
    return channels.map(({ id, name, removable }) => (
      <a className={className(id)} key={id} href={`#${name}`} role="tab" onClick={this.changeChannel(id)}>
        {name}
        {removable && this.renderIcon(id, name)}
      </a>
    ));
  }

  render() {
    const { currentChannelId, channels } = this.props;
    return (
      <div className="list-group" id="myList" role="tablist">
        {this.renderChannels(channels, currentChannelId)}
      </div>
    );
  }
}

export default Channels;
