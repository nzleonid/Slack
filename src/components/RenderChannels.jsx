import React from 'react';
import { connect } from 'react-redux';
import ListChanels from './ListChanels';

const mapStateToProps = ({ newChannels }) => {
  const props = {
    newChannels,
  };
  return props;
};
@connect(mapStateToProps)

class RenderChannels extends React.Component {
  render() {
    const { newChannels } = this.props;
    return (
      <>
        <ListChanels channels={newChannels} />
      </>
    );
  }
}

export default RenderChannels;
