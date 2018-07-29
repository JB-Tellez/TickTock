import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <h1>{this.state.date.toLocaleTimeString()}</h1>;
  }
}
