import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/header/navbar.component";
import ShopingCart from "./components/shopingcart.component";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ShopingCart />
      </div>
    );
  }
}

export default App;
