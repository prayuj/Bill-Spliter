import React, { Component } from "react";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: props.names,
      result: props.result,
      error: props.error
    };
  }
  render() {
    if (this.state.error)
      return <div>{this.state.error}</div>
    return this.state.names.map((name, index) => (
      <div>
        {name} has to contribute <strong>₹ {this.state.result[name]}</strong>
      </div>
    ));
  }
}

export default Result;
