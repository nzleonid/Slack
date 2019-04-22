import React from 'react';
import InputMessage from './InputMessage';
import Messages from './Messages';
import Channels from './Channels';
import NewChannel from './NewChannel';
import ModalDeleteChannel from './ModalDeleteChannel';
import ModalRenameChannel from './ModalRenameChannel';

const App = () => (
  <div className="h-100">
    <ModalDeleteChannel />
    <ModalRenameChannel />
    <div className="row">
      <div className="col-3">
        <h3>Channels</h3>
        <Channels />
        <NewChannel />
      </div>
      <div className="col">
        <h3>Chat</h3>
        <div className="overflow-auto border border-dark" style={{ height: '500px' }}>
          <Messages />
        </div>
        <InputMessage />
      </div>
    </div>
  </div>
);
export default App;
