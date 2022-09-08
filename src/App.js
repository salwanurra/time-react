import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );

  }
}

// export default App;

export default function Clock() {
  const [date, setDate] = useState(new Date())
  function tick() {
    setDate(new Date())
  }
  setInterval(() => tick(), 1000)
  return (
    <div className='App'>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
  
}
