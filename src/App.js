import React, { Component } from "react";

// Import Components
import Button from "./components/button";

import "./App.css";

class App extends Component {
  state = {
    display: 0,
    first: 0,
    second: 0,
    operation: null,
    order: "first",

  };

  number = (value) => {
    const { order,  first, second, display } = this.state;
    let val = "";
    
    if (order === "first") {
      if(first === 0){
        val = value;
      } else {
        val = "" + first + value 
      }
      this.setState({ first: val });
    }
    if (order === "second") {
      if(second === 0){
        val = value
      } else {
        val = "" + second + value
      }
      this.setState({ second: val });
    }
    
    if(val > 999999 || display === "ERROR"){
      this.setState({display: "ERROR"});
      this.setState({operation: "ERROR"})
    } else {
      this.setState({ display: val });
    }
    
  };

  clear = () => {
    this.setState({
      answer: 0,
      display: 0,
      first: 0,
      second: 0,
      operation: null,
      order: "first",
    });
    console.log("Clear Button Pushed");
  };

  handleClear = () => {
    console.log("Clear Button Pushed");
  };

  operation = (op) => {
    switch (op) {
      case "multiply":
        this.setState({ operation: "multiply" });
        this.setState({ order: "second" });
        break;
      case "plus":
        this.setState({ operation: "plus" });
        this.setState({ order: "second" });
        break;
      case "minus":
        this.setState({ operation: "minus" });
        this.setState({ order: "second" });
        break;
      case "divide":
        this.setState({ operation: "divide" });
        this.setState({ order: "second" });
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
      // this.setState({ display: first * second });
        break;
      case "plus":
        ans = first + second;  
      // this.setState({ display: first + second });
        break;
      case "minus":
        ans = first - second;
        // this.setState({ display: first - second });
        break;
      case "divide":
        ans = first / second;
        // this.setState({ display: first / second });
        break;
      default:
        break;
    }

    if (operation === "ERROR" || ans > 999999){
      this.setState({display: "ERROR"})
    } else if ( ans - Math.floor(ans) !== 0 ){
      this.setState({display: ans.toString().slice(0,7) })
    } 
    else {
      this.setState({display: ans})  
    }

    
    this.setState({first: 0})
    this.setState({second: 0})
    this.setState({order: "first"})
    
  };

  render() {
    const { display } = this.state;
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="outline set-width p-4">
          <div className="">
            <div className="display-answer rounded-pill mb-3">{display}</div>
            <div id="buttons">
              <div className="">
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.clear()}
                >
                  CE
                </button>
                {/* <button className="btn btn-dark rounded-circle set-size m-1">
                  C
                </button> */}
                <Button
                  label="C"
                  name="clear"
                  // onClick={() => this.handleClear()}
                />
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.operation("plus")}
                >
                  +
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.operation("minus")}
                >
                  -
                </button>
              </div>
              <div className="">
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.number(1)}
                >
                  1
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.number(2)}
                >
                  2
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1 "
                  onClick={() => this.number(3)}
                >
                  3
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.operation("multiply")}
                >
                  X
                </button>
              </div>
              <div className="">
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.number(4)}
                >
                  4
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.number(5)}
                >
                  5
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.number(6)}
                >
                  6
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.operation("divide")}
                >
                  %
                </button>
              </div>
              <div className="">
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.number(7)}
                >
                  7
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.number(8)}
                >
                  8
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.number(9)}
                >
                  9
                </button>
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.equals()}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
