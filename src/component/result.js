import React, { Component } from "react";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: props.names,
      result: props.result
    };
  }
  render() {
    return this.state.names.map((name, index) => (
      <div>
        {name} has to contribute <strong>Rs.{this.state.result[name]}</strong>
      </div>
    ));
  }
}

export default Result;
