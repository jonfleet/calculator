import React, { Component } from "react";

class Button extends Component {
  state = {};

  clear = () => {
    console.log("Clear Pushed");
  };

  show = () => {
    console.log("Show");
  };

  render() {
    const { label } = this.props;

    return (
      <button
        className="btn btn-dark rounded-circle set-size m-1"
        onClick={() => this.clear()}
      >
        {label}
      </button>
    );
  }
}

export default Button;
