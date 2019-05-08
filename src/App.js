import React from 'react';
import logo from './logo.svg';
import './App.css';
import openSocket from 'socket.io-client';

// const socket = openSocket('ws://stocks.mnet.website');
class App extends React.Component {

  constructor(props) {
    super(props);
    // socket.on('message', (message) => {
    //   console.log('RECIEVING ============', message)
    // })
  }
  componentDidMount = () => {
    this.connection = new WebSocket('ws://stocks.mnet.website');
    this.connection.onmessage = this.connectionworking;

  }

  connectionworking = (message) => {
console.log('RECIEVING ============', message.data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
