import React, { Component } from "react";
import AddCart from "./addTocart";
class ShopingCart extends Component {
  state = {
    counters: [
      {
        id: 0,
        value: 0
      },
      {
        id: 1,
        value: 10
      }
    ]
  };
  addItem = value => {
    const counters = [...this.state.counters]; // clone array
    // counters[0].value++;
    //counters[0] = { ...value }; // clone object
    const index = counters.indexOf(value); // find index of object from an array
    counters[index] = { ...value };
    counters[index].value = counters[index].value + 1;

    //console.log(index);
    //console.log(counters[index]);
    //after increment update state
    this.setState({ counters });
  };
  restCounter = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      counters: counters
    });
  };
  handledelete = Counterid => {
    console.log(Counterid);
    const counters = this.state.counters.filter(c => c.id !== Counterid);
    this.setState({ counters });
  };
  render() {
    return (
      <div className="m-2 text-left">
        <h4>Welcome to Shoping cart</h4>
        <button className="btn btn-primary btn-sm" onClick={this.restCounter}>
          Reset
        </button>
        {this.state.counters.map(counter => (
          <AddCart
            onIncrement={this.addItem}
            onDelete={this.handledelete}
            key={counter.id}
            value={counter}
          />
        ))}
      </div>
    );
  }
}

export default ShopingCart;
