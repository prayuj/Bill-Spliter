import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import BillSpliter from "./component/billSplitter";
class App extends Component {
  render() {
    let names = ["Prayuj", "Prayuj's Friend"];
    let items = [
      {
        id: 0,
        name: "Butter Chicken",
        price: 350,
        selectall: true,
        contributions: [50, 50],
        select: [true, true],
        warning: false,
        warning_text: "",
        tax: "",
        contri: [50, 50],
      },
    ];
    let taxes = 10;
    let total_bill = 385;
    return (
      <BillSpliter
        new={false}
        names={names}
        items={items}
        taxes={taxes}
        total_bill={total_bill}
      ></BillSpliter>
    );
  }
}

export default App;

// import GetNames from "./component/getNames";
// import Items from "./component/items";
// import axios from "axios";
// import LoadingSpinner from "./component/loadingSpinner";
// import Result from "./component/result";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       names: [],
//       loading: false,
//       modal_show: false
//     };
//     this.handleGetNamesForm = this.handleGetNamesForm.bind(this);
//     this.getItemsAndTaxes = this.getItemsAndTaxes.bind(this);
//     this.modalClose = this.modalClose.bind(this);
//   }
//   handleGetNamesForm(names) {
//     console.log(names);
//     this.setState({
//       names: names
//     });
//   }

//   modalClose() {
//     this.setState({
//       modal_show: false
//     });
//   }

//   getItemsAndTaxes(items, taxes, tax_equal) {
//     if (tax_equal) {
//       for (let i = 0; i < items.length; i++) items[i].tax = 0;
//     }
//     console.log(items, taxes);
//     let data = {
//       people: this.state.names,
//       items: items,
//       taxes: taxes
//     };

//     console.log(data);
//     this.setState({ loading: true, modal_show: true }, () => {
//       axios
//         .post("http://127.0.0.1:5000/", data)
//         .then(res => {
//           this.setState({
//             loading: false,
//             result: res.data
//           });
//           console.log(res);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Bill Spliter</h1>
//         <GetNames sendNamesHere={this.handleGetNamesForm} />
//         {this.state.names.length > 0 ? (
//           <Items
//             names={this.state.names}
//             resultOfForm={this.getItemsAndTaxes}
//           />
//         ) : (
//           <h4>Enter Names to Continue</h4>
//         )}
//         <Modal show={this.state.modal_show}>
//           <Modal.Header>
//             <Modal.Title>Result</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {this.state.loading ? (
//               <LoadingSpinner />
//             ) : (
//               <Result names={this.state.names} result={this.state.result} />
//             )}
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.modalClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default App;
