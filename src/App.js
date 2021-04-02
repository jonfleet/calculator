import React from "react";
import Operations from "./components/operations"

import "./App.css";

class App extends Operations {
  state = {
    display: 0,
    first: 0,
    second: 0,
    operation: null,
    order: "first",

  };


  render() {
    const { display } = this.state;
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="outline set-width p-4">
          <div className="">
            <div label="display" className="display-answer rounded-pill mb-3">{display}</div>
            <div id="buttons">
              <div className="">
                <button
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.clearEverything()}
                >
                  CE
                </button>
                <button 
                  className="btn btn-dark rounded-circle set-size m-1"
                  onClick={() => this.clear()}
                >
                  C
                </button>
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
