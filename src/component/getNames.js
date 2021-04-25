import React, { Component } from "react";

class GetNames extends Component {
  constructor(props) {
    super(props);
    if (props.names.length === 0)
      this.state = {
        names: [{ name: "", id: 0 }],
        id_count: 0,
        count: 1
      };
    else {
      let names = [];
      for (let i = 0; i < props.names.length; i++)
        names.push({ name: props.names[i], id: i });
      this.state = {
        names: names,
        id_count: props.names.length - 1,
        count: props.names.length
      };
    }
    this.addName = this.addName.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.deleteName = this.deleteName.bind(this);
  }

  deleteName(e) {
    console.log(e.target.id);
    let names = this.state.names;
    console.log(names);
    for (let i = 0; i < names.length; i++) {
      if (names[i].id === parseInt(e.target.id)) {
        console.log("Found");
        names.splice(i, 1);
      }
    }
    this.setState(
      {
        names: names,
        count: this.state.count - 1
      },
      () => {
        let names_updated = [];
        for (let i = 0; i < this.state.count; i++) {
          names_updated.push(this.state.names[i].name);
        }
        this.props.sendNamesHere(names_updated);
      }
    );
  }

  addName() {
    let names = this.state.names;
    names.push({ name: "", id: this.state.id_count + 1 });
    this.setState({
      id_count: this.state.id_count + 1,
      names: names,
      count: this.state.count + 1
    });
  }

  handleForm(e) {
    e.preventDefault();
    let names = [];
    for (let i = 0; i < this.state.count; i++) {
      names.push(this.state.names[i].name);
    }
    console.log(names);
    this.props.sendNamesHere(names);
  }

  onNameChange(e) {
    console.log(e.target.id, e.target.value);
    let names = this.state.names;
    for (let i = 0; i < this.state.count; i++) {
      console.log(names[i].id === e.target.id);
      if (names[i].id === e.target.id) {
        console.log("Here");
        names[i].name = e.target.value;
      }
    }
    this.setState(
      {
        names: names
      },
      () => {
        let names_updated = [];
        for (let i = 0; i < this.state.count; i++) {
          names_updated.push(this.state.names[i].name);
        }
        this.props.sendNamesHere(names_updated);
      }
    );
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
                    value={name.name}
                    id={name.id}
                    className="form-control"
                    placeholder="Enter Name of Person"
                    onChange={this.onNameChange}
                    required
                  />
                </td>
                <button
                  className="btn btn-danger"
                  id={name.id}
                  onClick={this.deleteName}
                  style={{ fontSize: "110%" }}
                >
                  <i
                    className="fa fa-trash"
                    id={name.id}
                    onClick={this.deleteName}
                  />
                </button>
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
        <br />
        {/* <button type="submit" className="btn btn-info">
          Start Splitting!
        </button> */}
      </form>
    );
  }
}

export default GetNames;
