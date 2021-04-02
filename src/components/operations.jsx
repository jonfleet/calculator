import { Component } from "react";

class Operations extends Component {
  number = (value) => {
    const { order, first, second, display } = this.state;
    let val = "";

    if (order === "first") {
      if (first === 0) {
        val = value;
      } else {
        val = "" + first + value;
      }
      this.setState({ first: parseInt(val) });
    }
    if (order === "second") {
      if (second === 0) {
        val = value;
      } else {
        val = "" + second + value;
      }
      this.setState({ second: parseInt(val) });
    }

    if (val > 999999 || display === "ERROR") {
      this.setState({
        display: "ERROR",
        operation: "ERROR",
      });
    } else {
      this.setState({ display: val });
    }
  };

  clearEverything = () => {
    this.setState({
      answer: 0,
      display: 0,
      first: 0,
      second: 0,
      operation: null,
      order: "first",
    });
  };

  clear = () => {
    const { order } = this.state;
    if (order === "first") {
      this.setState({
        first: 0,
        display: 0,
      });
    } else {
      this.setState({
        second: 0,
        display: 0,
      });
    }
  };

  operation = (op) => {
    switch (op) {
      case "multiply":
        this.setState({
          operation: "multiply",
          order: "second",
        });
        break;
      case "plus":
        this.setState({
          operation: "plus",
          order: "second",
        });
        break;
      case "minus":
        this.setState({
          operation: "minus",
          order: "second",
        });
        break;
      case "divide":
        this.setState({
          operation: "divide",
          order: "second",
        });
        break;
      default:
        break;
    }
  };

  equals = () => {
    const { first, second, operation } = this.state;

    let ans;
    switch (operation) {
      case "multiply":
        ans = first * second;
        break;
      case "plus":
        ans = first + second;
        break;
      case "minus":
        ans = first - second;
        break;
      case "divide":
        ans = first / second;
        break;
      default:
        break;
    }

    if (operation === "ERROR" || ans > 999999) {
      this.setState({ display: "ERROR" });
    } else if (ans - Math.floor(ans) !== 0) {
      this.setState({ display: ans.toString().slice(0, 7) });
    } else {
      this.setState({ display: ans });
    }
    this.setState({
      first: 0,
      second: 0,
      order: "first",
    });
  };
}

export default Operations;
