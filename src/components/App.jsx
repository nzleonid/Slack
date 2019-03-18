import React from 'react';

const App = ({ gon: { channels } }) => (
  <div className="h-100">
    <div className="row">
      <div className="col-3">
        <h3>Channels</h3>
        <ul className="list-group">
          {
          channels.map(({ id, name }) => (
            <li className="list-group-item" key={id}>
              {name}
            </li>
          ))
          }
        </ul>
      </div>
      <div className="col">
        <h3>Chat</h3>
        <div className="p-2 h-100 mh-100 overflow-auto border border-dark" />
        <div className="form-group">
          <div className="input-group">
            <input name="text" type="text" className="form-control" placeholder="message..." />
            <div className="input-group-append">
              <button type="submit" className="btn btn-dark">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default App;
