import React from 'react';
import InputMessage from './InputMessage';
import RenderMessages from './RenderMessages';
import Message from './Message';
import AlertError from './AlertError';

const App = ({ gon }) => (
  <div className="h-100">
    <AlertError />
    <div className="row">
      <div className="col-3">
        <h3>Channels</h3>
        <ul className="list-group">
          {
          gon.channels.map(({ id, name }) => (
            <li className="list-group-item" key={id}>
              {name}
            </li>
          ))
          }
        </ul>
      </div>
      <div className="col">
        <h3>Chat</h3>
        <div className="overflow-auto border border-dark" style={{ height: '500px' }}>
          {gon.messages.map(message => <Message key={message.id} message={message} />)}
          <RenderMessages />
        </div>
        <InputMessage />
      </div>
    </div>
  </div>
);
export default App;
