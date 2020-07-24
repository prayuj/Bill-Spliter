import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: props.id,
      name: props.name,
      price: props.price,
      names: props.names,
      contributions: props.contributions,
      select: props.select,
      srno: props.srno,
      selectall: props.selectall,
      warning: props.warning,
      warning_text: props.warning_text,
      tax: props.tax,
      individual_item_tax_show: props.individual_item_tax_show,
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
        select: this.props.select,
        selectall: this.props.selectall,
        warning: this.props.warning,
        warning_text: this.props.warning_text,
        tax: this.props.tax,
        individual_item_tax_show: this.props.individual_item_tax_show,
      });
    }
  }

  render() {
    console.log(this.state.select);
    let names = (
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="selectall"
                id={this.state.id}
                checked={this.state.selectall}
              />
            </th>
            <th>Names</th>
            <th>Percentage of Contribution</th>
          </tr>
        </thead>
        <tbody>
          {this.state.names.map((name, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  name={"select" + index}
                  id={this.state.id}
                  checked={this.state.select[index]}
                />
              </td>
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
          Split Selected
          <br />
          {names}
          {this.state.individual_item_tax_show ? (
            <input
              type="number"
              name="item_tax"
              className="form-control"
              id={this.state.id}
              placeholder="Enter Tax on this item as %"
              value={this.state.tax}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Item;
