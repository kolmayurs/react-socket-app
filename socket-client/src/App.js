import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://172.16.200.253:4000/",
      
      ///
      color: 'white'
      ///
      
    };
  }

  // sending sockets
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  ///
  
  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }
  
  ///

  render() {
    // testing for socket connections

    const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col
    })

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send() }>Change Color</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
        <button id="black" onClick={() => this.setColor('black')}>Black</button>
        <button id="white" onClick={() => this.setColor('white')}>White</button>
      </div>
    )
  }
}
export default App;