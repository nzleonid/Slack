import React from 'react';
import InputMessage from './InputMessage';
import RenderMessages from './RenderMessages';
import Message from './Message';

const App = ({ gon }) => (
  <div className="h-100">
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
        <div className="p-2 h-100 mh-100 overflow-auto border border-dark">
          {gon.messages.map(message => <Message key={message.id} message={message} />)}
          <RenderMessages />
        </div>
        <InputMessage />
      </div>
    </div>
  </div>
);
export default App;
