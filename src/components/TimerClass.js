import React from "react";

class TimerClass extends React.Component {
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
            <h1>Class Component</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
    );

  }
}

export default TimerClass;