import React, { Component } from "react";
import GetNames from "./getNames";
import Items from "./items";
import axios from "axios";
import LoadingSpinner from "./loadingSpinner";
import Result from "./result";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class BillSpliter extends Component {
  constructor(props) {
    super(props);
    if (props.new)
      this.state = {
        names: [],
        items: [],
        taxes: 0,
        total_bill: 0,
        loading: false,
        modal_show: false,
      };
    else
      this.state = {
        names: props.names,
        items: props.items,
        taxes: props.taxes,
        total_bill: props.total_bill,
        loading: false,
        modal_show: false,
      };
    this.handleGetNamesForm = this.handleGetNamesForm.bind(this);
    this.getItemsAndTaxes = this.getItemsAndTaxes.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }
  handleGetNamesForm(names) {
    console.log(names);
    this.setState({
      names: names,
    });
  }

  modalClose() {
    this.setState({
      modal_show: false,
    });
  }

  getItemsAndTaxes(items, taxes, tax_equal, total_bill) {
    if (tax_equal) {
      for (let i = 0; i < items.length; i++) items[i].tax = 0;
    }
    console.log(items, taxes);
    let data = {
      people: this.state.names,
      items: items,
      taxes: taxes,
      total_bill: total_bill,
    };

    console.log(data);
    this.setState({ loading: true, modal_show: true }, () => {
      axios
        .post("http://127.0.0.1:5000/", data)
        .then((res) => {
          this.setState({
            loading: false,
            result: res.data,
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Bill Spliter</h1>
        <GetNames
          names={this.state.names}
          sendNamesHere={this.handleGetNamesForm}
        />
        {this.state.names.length > 0 ? (
          <Items
            names={this.state.names}
            items={this.state.items}
            taxes={this.state.taxes}
            total_bill={this.state.total_bill}
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

export default BillSpliter;
