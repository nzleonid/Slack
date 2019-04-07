import React from 'react';
import InputMessage from './InputMessage';
import RenderMessages from './RenderMessages';
import Message from './Message';
import AlertError from './AlertError';
import ListChanels from './ListChanels';
import NewChannel from './NewChannel';
import RenderChannels from './RenderChannels';
import ModalDeleteChannel from './ModalDeleteChannel';
import ModalRenameChannel from './ModalRenameChannel';

const App = ({ gon }) => (
  <div className="h-100">
    <AlertError />
    <ModalDeleteChannel />
    <ModalRenameChannel />
    <div className="row">
      <div className="col-3">
        <h3>Channels</h3>
        <ListChanels channels={gon.channels} />
        <RenderChannels />
        <NewChannel />
      </div>
      <div className="col">
        <h3>Chat</h3>
        <div className="overflow-auto border border-dark" style={{ height: '500px' }}>
          <Message messages={gon.messages} />
          <RenderMessages />
        </div>
        <InputMessage />
      </div>
    </div>
  </div>
);
export default App;
