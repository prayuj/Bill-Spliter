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
      />
    );
  }
}

export default App;
