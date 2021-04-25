import React, { Component } from "react";
import Item from "./item";
import { all } from "q";

class Items extends Component {
  constructor(props) {
    super(props);
    console.log(props.names);
    let contri = [];
    let select = [];
    if (props.items.length == 0) {
      for (let i = 0; i < props.names.length; i++) {
        contri.push("");
        select.push(true);
      }
      this.state = {
        names: props.names,
        tax_equal: false,
        total_bill: props.total_bill,
        items: [
          {
            id: 0,
            name: "",
            price: "",
            selectall: select.every((item) => {
              return item;
            }),
            contributions: contri,
            select: select,
            warning: false,
            warning_text: "",
            tax: "",
          },
        ],
        id_count: props.items.length - 1,
        tax: props.taxes,
        count: props.items.length,
      };
    } else
      this.state = {
        names: props.names,
        tax_equal: false,
        total_bill: props.total_bill,
        items: props.items,
        id_count: 0,
        tax: props.taxes,
        count: 1,
      };
    this.addItem = this.addItem.bind(this);
    this.itemChange = this.itemChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleEqualTaxChange = this.handleEqualTaxChange.bind(this);
    this.getTotalBill = this.getTotalBill.bind(this);
  }

  componentDidUpdate(prevProps) {
    let currentNames = this.props.names;
    if (JSON.stringify(currentNames) != JSON.stringify(prevProps.names)) {
      console.log("Updated Items");
      this.setState({
        names: this.props.names,
      });
    }
  }

  getTotalBill() {
    let total_bill = 0;
    console.log(this.state);
    if (this.state.tax_equal)
      for (let i = 0; i < this.state.items.length; i++) {
        let item = this.state.items[i];
        let tax = 0;
        let price = 0;
        if (item.price !== "") price = parseFloat(item.price);
        if (this.state.tax !== "") tax = parseFloat(this.state.tax);
        total_bill += (price * (100 + tax)) / 100;
      }
    else {
      for (let i = 0; i < this.state.items.length; i++) {
        let item = this.state.items[i];
        let item_tax = 0;
        let tax = 0;
        let price = 0;
        if (item.price !== "") price = parseFloat(item.price);
        if (item.tax !== "") item_tax = parseFloat(item.tax);
        if (this.state.tax !== "") tax = parseFloat(this.state.tax);
        console.log(price, item_tax, tax);
        total_bill += (price * (100 + item_tax + tax)) / 100;
      }
    }

    this.setState({
      total_bill: total_bill,
    });
  }

  deleteItem(e) {
    console.log(e.target.id);
    let items = this.state.items;
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == parseInt(e.target.id)) {
        console.log("Found");
        items.splice(i, 1);
      }
    }
    console.log(items);
    this.setState({
      items: items,
      count: this.state.count - 1,
    });
  }

  addItem() {
    let items = this.state.items;
    let contri = [];
    let select = [];
    for (let i = 0; i < this.state.names.length; i++) {
      contri.push("");
      select.push(true);
    }
    items.push({
      id: this.state.id_count + 1,
      name: "",
      price: "",
      contributions: contri,
      warning: false,
      selectall: select.every((item) => {
        return item;
      }),
      select: select,
      warning_text: "",
      tax: "",
    });
    this.setState({
      id_count: this.state.id_count + 1,
      items: items,
      count: this.state.count + 1,
    });
  }

  itemChange(e) {
    console.log(e.target);
    const re = /(\d+(\.\d+)?)/;
    let items = this.state.items;
    if (e.target.name == "tax")
      this.setState({ tax: e.target.value }, () => {
        this.getTotalBill();
      });
    else
      for (let i = 0; i < items.length; i++) {
        if (items[i].warning) {
          console.log("Here");
          items[i].warning = false;
          items[i].warning_text = "";
        }
        if (parseInt(e.target.id) === items[i].id) {
          console.log(items[i]);
          let item = items[i];
          if (e.target.name === "item") {
            console.log("ITEM");
            item.name = e.target.value;
          } else if (e.target.name === "price") {
            if (e.target.value === "" || re.test(e.target.value)) {
              console.log("PRICE");
              item.price = e.target.value;
            }
          } else if (e.target.name === "item_tax") {
            if (e.target.value === "" || re.test(e.target.value)) {
              console.log("TAX " + e.target.value);
              item.tax = e.target.value;
            }
          } else if (e.target.name === "equal") {
            let num = 0;
            for (let j = 0; j < this.state.names.length; j++) {
              if (item.select[j]) num++;
            }

            for (let j = 0; j < this.state.names.length; j++) {
              if (item.select[j])
                item.contributions[j] = Math.round((100 / num) * 100) / 100;
              else item.contributions[j] = "";
            }
          }
          else if (e.target.name === "selectall" && e.target.checked) {
            item.selectall = true;
            for (let j = 0; j < this.state.names.length; j++) {
              item.select[j] = true;
            }
          } else if (e.target.name === "selectall" && !e.target.checked) {
            item.selectall = false;
            for (let j = 0; j < this.state.names.length; j++) {
              item.select[j] = false;
            }
          } else if (e.target.name.charAt(0) === "c") {
            item.contributions[
              parseInt(e.target.name.split("contribution")[1])
            ] = e.target.value;
          } else if (e.target.name.charAt(0) === "s") {
            console.log(
              item.select[parseInt(e.target.name.split("select")[1])]
            );
            item.select[parseInt(e.target.name.split("select")[1])] = !item
              .select[parseInt(e.target.name.split("select")[1])];
            item.selectall = item.select.every((item) => {
              return item;
            });
          }
          console.log(item);
          break;
        }
      }
    console.log(items, this.state.count);
    this.setState(
      {
        items: items,
      },
      () => {
        this.getTotalBill();
      }
    );
  }

  handleForm(e) {
    e.preventDefault();
    console.log(this.state.items);
    if (this.state.items.length) {
      let tax = e.target.tax.value;
      if (tax == "") tax = 0;
      let items = [];
      let flag = true;
      for (let i = 0; i < this.state.count; i++) {
        let item = this.state.items[i];
        item.name = this.state.items[i].name;
        if (!isNaN(parseFloat(this.state.items[i].price))) {
          console.log("It is valid price");
          item.price = parseFloat(this.state.items[i].price);
        } else {
          console.log("It is not valid price");
          flag = false;
          item.warning = true;
          item.warning_text = "Make sure Price is Numeric";
        }

        let contri = [];
        let sum = 0;
        for (let j = 0; j < this.state.names.length; j++) {
          if (this.state.items[i].contributions[j] === "") contri.push(0);
          else contri.push(parseFloat(this.state.items[i].contributions[j]));
          sum += contri[j];
        }
        if (item.tax === "") item.tax = 0;
        if (!this.state.tax_equal) {
          if (!isNaN(parseFloat(this.state.items[i].tax))) {
            console.log("It is valid tax");
            item.tax = parseFloat(this.state.items[i].tax);
            console.log(item.tax);
          } else {
            console.log("It is not valid tax");
            flag = false;
            item.warning = true;
            item.warning_text = "Make sure Tax is Numeric";
          }
        }

        if (Math.round(sum) !== 100) {
          flag = false;
          item.warning = true;
          item.warning_text = "Make sure sum is 100";
        }
        item.contri = contri;
        items.push(item);
      }
      this.setState({
        items: items,
      });
      console.log(items, tax);
      if (flag)
        this.props.resultOfForm(
          items,
          tax,
          this.state.tax_equal,
          this.state.total_bill
        );
    } else alert("Enter Items");
  }

  handleEqualTaxChange(e) {
    console.log(e.target.value);
    const tax_equal = e.target.value === "Yes" ? true : false;
    this.setState(
      {
        tax_equal: tax_equal,
      },
      () => {
        this.getTotalBill();
      }
    );
  }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        Are all items taxed equally?
        <input
          type="radio"
          name="equaltax"
          value="Yes"
          checked={this.state.tax_equal ? true : false}
          onChange={this.handleEqualTaxChange}
        />{" "}
        Yes
        <input
          type="radio"
          name="equaltax"
          value="No"
          checked={this.state.tax_equal ? false : true}
          onChange={this.handleEqualTaxChange}
        />{" "}
        No
        <br />
        <h3>Enter Items </h3>
        {this.state.items.map((item, index) => (
          <div
            key={index}
            style={{
              border: item.warning ? "10px solid red" : "2px solid",
              margin: "2%",
              padding: "3%",
            }}
          >
            <h4>
              <b>{item.warning_text}</b>
            </h4>
            <Item
              srno={index + 1}
              names={this.state.names}
              id={item.id}
              name={item.name}
              price={item.price}
              contributions={item.contributions}
              select={item.select}
              selectall={item.selectall}
              handleChange={this.itemChange}
              warning={item.warning}
              warning_text={item.warning_text}
              tax={item.tax}
              individual_item_tax_show={!this.state.tax_equal}
            />
            <button
              type="button"
              className="btn btn-danger"
              id={item.id}
              onClick={this.deleteItem}
            >
              Delete Item
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          id="additem"
          onClick={this.addItem}
        >
          Add Item
        </button>
        <br />
        <br />
        <table>
          <tbody>
            {this.state.tax_equal ? (
              <tr>
                <td>Enter total taxes</td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    name="tax"
                    className="form-control"
                    id="nameOfPerson"
                    placeholder="Enter Tax"
                    value={this.state.tax}
                    onChange={this.itemChange}
                    required
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td>Enter Additional taxes as %</td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    name="tax"
                    className="form-control"
                    id="nameOfPerson"
                    value={this.state.tax}
                    onChange={this.itemChange}
                    placeholder="Enter Tax"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <h3>Total Bill: Rs. {this.state.total_bill}</h3>
        <button type="submit" className="btn btn-success">
          Get Contributions
        </button>
      </form>
    );
  }
}

export default Items;
