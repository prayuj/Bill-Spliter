import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    let contri = [];
    for (let i = 0; i < props.names.length; i++) contri.push(0);
    this.state = {
      id: props.id,
      name: props.name,
      price: props.price,
      names: props.names,
      contributions: props.contributions,
      srno: props.srno,
      warning: props.warning,
      warning_text: props.warning_text
    };
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props) != JSON.stringify(prevProps)) {
      console.log("Updated Item Component");
      this.setState({
        id: this.props.id,
        name: this.props.name,
        price: this.props.price,
        names: this.props.names,
        contributions: this.props.contributions,
        warning: this.props.warning,
        warning_text: this.props.warning_text
      });
    }
  }

  render() {
    let names = (
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Percentage of Contribution</th>
          </tr>
        </thead>
        <tbody>
          {this.state.names.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  name={"contribution" + index}
                  className="form-control"
                  id={this.state.id}
                  placeholder="Enter Percentage"
                  value={this.state.contributions[index]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    return (
      <div id={this.state.id} onChange={this.props.handleChange}>
        <div>
          <h4>Item #{this.state.srno}</h4>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="item"
                    className="form-control"
                    id={this.state.id}
                    placeholder="Enter item"
                    value={this.state.name}
                    required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    id={this.state.id}
                    placeholder="Enter Price of item"
                    value={this.state.price}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="checkbox" name="equal" id={this.state.id} />
          Split equally
          <br />
          {names}
        </div>
      </div>
    );
  }
}

export default Item;
