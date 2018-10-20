import React, { Component } from "react";
class AddCart extends Component {
  state = {};
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.props.value.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.value)}
          className="btn btn-secondary m-2 btn-sm"
        >
          Add Cart
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.value.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClass() {
    console.log(this.props);
    let _classes = "badge m-2 badge-";
    return (_classes += this.props.value.value == 0 ? "warning" : "primary");
  }
}

export default AddCart;
