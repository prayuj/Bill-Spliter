import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import GetNames from "./component/getNames";
import Items from "./component/items";
import axios from "axios";
import LoadingSpinner from "./component/loadingSpinner";
import Result from "./component/result";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      loading: false,
      modal_show: false
    };
    this.handleGetNamesForm = this.handleGetNamesForm.bind(this);
    this.getItemsAndTaxes = this.getItemsAndTaxes.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }
  handleGetNamesForm(names) {
    console.log(names);
    this.setState({
      names: names
    });
  }

  modalClose() {
    this.setState({
      modal_show: false
    });
  }

  getItemsAndTaxes(items, taxes, tax_equal) {
    // {"people":["Prayuj","Sagar","Olivia"],"items":[{"name":"Butter Chicken","price":450,"contri":[50,25,25]}],"taxes":"10"}
    if (tax_equal) {
      for (let i = 0; i < items.length; i++) items[i].tax = 0;
    }
    console.log(items, taxes);
    let data = {
      people: this.state.names,
      items: items,
      taxes: taxes
    };
    this.setState({ loading: true, modal_show: true }, () => {
      axios
        .post("https://tranquil-wave-24919.herokuapp.com/", data)
        .then(res => {
          this.setState({
            loading: false,
            result: res.data
          });
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Bill Spliter</h1>
        <GetNames sendNamesHere={this.handleGetNamesForm} />
        {this.state.names.length > 0 ? (
          <Items
            names={this.state.names}
            resultOfForm={this.getItemsAndTaxes}
          />
        ) : (
          <h4>Enter Names to Continue</h4>
        )}
        <Modal show={this.state.modal_show}>
          <Modal.Header>
            <Modal.Title>Result</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.state.loading ? (
              <LoadingSpinner />
            ) : (
              <Result names={this.state.names} result={this.state.result} />
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
