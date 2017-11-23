import * as React from 'react';
import './App.css';
import { OPEN_NAVBAR, NAVBAR_QUEUE } from 'app1';
declare var PubSub: any;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React App</h2>
        </div>
        <p className="App-intro">
          <p>Click here to open nav-bar in Angular App 1:
              <button onClick={() => this.sendAction() } >Click me</button>
          </p>
        </p>
      </div>
    );
  }
    sendAction() {
        PubSub.publish( NAVBAR_QUEUE, {type: OPEN_NAVBAR});
    }
}

export default App;
