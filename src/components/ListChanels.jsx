import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../actions';

const mapStateToProps = ({ currentChannelId, newChannels }) => {
  const props = {
    currentChannelId,
    newChannels,
  };
  return props;
};
@connect(mapStateToProps, actions)

class ListChanels extends React.Component {
  changeChannel = id => () => {
    const { changeChannel } = this.props;
    changeChannel({ id });
  }

  render() {
    const { currentChannelId, channels, newChannels } = this.props;
    const className = channelsId => cn({
      'list-group-item': true,
      'list-group-item-dark': true,
      'list-group-item-action': true,
      active: channelsId === currentChannelId,
    });
    return (
      <div className="list-group" id="myList" role="tablist">
        {channels.map(({ id, name }) => (
          <a className={className(id)} key={id} href={`#${name}`} role="tab" onClick={this.changeChannel(id)}>{name}</a>
        ))}
        {newChannels.map(({ id, name }) => (
          <a className={className(id)} key={id} href={`#${name}`} role="tab" onClick={this.changeChannel(id)}>{name}</a>
        ))}
      </div>
    );
  }
}

export default ListChanels;
