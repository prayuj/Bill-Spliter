import React, { Component } from "react";

class GetNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [""],
      count: 1
    };
    this.addName = this.addName.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  addName() {
    let names = this.state.names;
    names.push("");
    this.setState({
      names: names,
      count: this.state.count + 1
    });
  }

  handleForm(e) {
    e.preventDefault();
    let names = [];
    for (let i = 0; i < this.state.count; i++) {
      names.push(e.target[i].value);
    }
    console.log(names);
    this.props.sendNamesHere(names);
  }
  render() {
    return (
      <form id="target" onSubmit={this.handleForm}>
        Enter names of people contributing
        <table>
          <tbody>
            {this.state.names.map((name, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="person"
                    className="form-control"
                    id="nameOfPerson"
                    placeholder="Enter Name of Person"
                    required
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div id="main" />
        <button
          type="button"
          className="btn btn-primary"
          id="add"
          onClick={this.addName}
        >
          Add Name
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default GetNames;
