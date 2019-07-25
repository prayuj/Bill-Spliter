import React, { Component } from "react";
import Item from "./item";

class Items extends Component {
  constructor(props) {
    super(props);
    console.log(props.names);
    let contri = [];
    for (let i = 0; i < props.names.length; i++) contri.push("");
    this.state = {
      names: props.names,
      items: [
        {
          id: 0,
          name: "",
          price: "",
          contributions: contri,
          warning: false,
          warning_text: ""
        }
      ],
      id_count: 0,
      count: 1
    };
    this.addItem = this.addItem.bind(this);
    this.itemChange = this.itemChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    let currentNames = this.props.names;
    if (JSON.stringify(currentNames) != JSON.stringify(prevProps.names)) {
      console.log("Updated Items");
      this.setState({
        names: this.props.names
      });
    }
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
      count: this.state.count - 1
    });
  }

  addItem() {
    let items = this.state.items;
    let contri = [];
    for (let i = 0; i < this.state.names.length; i++) contri.push("");
    items.push({
      id: this.state.id_count + 1,
      name: "",
      price: "",
      contributions: contri,
      warning: false,
      warning_text: ""
    });
    this.setState({
      id_count: this.state.id_count + 1,
      items: items,
      count: this.state.count + 1
    });
  }

  itemChange(e) {
    console.log(e.target);
    const re = /(\d+(\.\d+)?)/;
    let items = this.state.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].warning) {
        console.log("Here");
        items[i].warning = false;
        items[i].warning_text = "";
      }
      if (parseInt(e.target.id) === items[i].id) {
        console.log("MATCH");
        let item = items[i];
        if (e.target.name === "item") {
          console.log("ITEM");
          item.name = e.target.value;
        }
        if (e.target.name === "price") {
          if (e.target.value === "" || re.test(e.target.value)) {
            console.log("PRICE");
            item.price = e.target.value;
          }
        }
        if (e.target.name === "equal" && e.target.checked) {
          for (let i = 0; i < this.state.names.length; i++) {
            item.contributions[i] =
              Math.round((100 / this.state.names.length) * 100) / 100;
          }
        } else {
          item.contributions[parseInt(e.target.name.split("contribution")[1])] =
            e.target.value;
        }
        break;
      }
    }
    console.log(items, this.state.count);
    this.setState({
      items: items
    });
  }

  handleForm(e) {
    e.preventDefault();
    if (this.state.items.length) {
      let tax = e.target.tax.value;
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

        if (Math.round(sum) !== 100) {
          flag = false;
          item.warning = true;
          item.warning_text = "Make sure sum is 100";
        }
        item.contri = contri;
        items.push(item);
      }
      this.setState({
        items: items
      });
      console.log(items, tax);
      if (flag) this.props.resultOfForm(items, tax);
    } else alert("Enter Items");
  }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        {this.state.items.map((item, index) => (
          <div
            key={index}
            style={{
              border: item.warning ? "10px solid red" : "2px solid",
              margin: "2%",
              padding: "3%"
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
              handleChange={this.itemChange}
              warning={this.state.warning}
              warning_text={this.state.warning_text}
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
            <tr>
              <td>Enter total tax</td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  name="tax"
                  className="form-control"
                  id="nameOfPerson"
                  placeholder="Enter Tax"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Items;
