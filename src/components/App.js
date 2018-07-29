import React from "react";
import Clock from './Clock';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clocks: []
    };
    this.addClock = this.addClock.bind(this);
    this.removeClock = this.removeClock.bind(this);
  }

  addClock() {
    const clocks = [...this.state.clocks, <Clock key={this.state.clocks.length} />];
    this.setState({ clocks });
  }

  removeClock() {
    let clocks = this.state.clocks.slice(0, -1);
    this.setState({ clocks });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addClock}>add clock</button>
        {this.state.clocks.length > 0 && (
          <button onClick={this.removeClock}>remove clock</button>
        )}
        {this.state.clocks}
      </div>
    );
  }
}
