import React, { Component } from "react";
class Counter extends Component {
  state = {
    //   receiving value from component
    value: this.props.value
  };
  doIncreament = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  render() {
    console.log("props", this.props);
    return (
      <div className="container-fluid">
        {this.props.children}
        <span className={this.getBadgeMethod()}>{this.formateCount()}</span>
        <button
          onClick={this.doIncreament}
          className="btn btn-secondary btn-sm"
        >
          increament
        </button>
      </div>
    );
  }
  formateCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
  //classs
  getBadgeMethod() {
    let _badgeclass = "badge m-2 badge-";
    _badgeclass += this.state.value === 0 ? "warning" : "primary";
    return _badgeclass;
  }
}

export default Counter;
