import React, { Component } from "react";
import AddCart from "./addTocart";
class ShopingCart extends Component {
  render() {
    return (
      <div className="m-2 text-left">
        <h4>Welcome to Shoping cart</h4>
        <button className="btn btn-primary btn-sm" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <AddCart
            onIncrement={this.props.onAdditem}
            onDelete={this.props.onDelete}
            key={counter.id}
            value={counter}
          />
        ))}
      </div>
    );
  }
}

export default ShopingCart;
