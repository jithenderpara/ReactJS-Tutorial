import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/header/navbar.component";
import ShopingCart from "./components/shopingcart.component";

class App extends Component {
  state = {
    counters: [
      {
        id: 0,
        value: 0
      },
      {
        id: 1,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
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
      <div>
        <Navbar
          TotalItems={this.state.counters.filter(c => c.value > 0).length}
        />
        <ShopingCart
          onReset={this.restCounter}
          onAdditem={this.addItem}
          onDelete={this.handledelete}
          counters={this.state.counters}
        />
      </div>
    );
  }
}

export default App;
