import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cal: {
        currentOperand: "",
        perviousOperand: "",
        operate: "",
      },
    };
  }

  addDigit = (digit) => {
    let cal = { ...this.state.cal };
    if (digit === "0" && cal.currentOperand === "0") return 0;
    if (digit === "." && cal.currentOperand.includes(".")) return 0;
    if (digit === "." && cal.currentOperand === "") {
      cal.currentOperand = "0.";
      digit = "";
    }
    cal.operate = "";
    cal.currentOperand = `${cal.currentOperand || ""}${digit}`;
    this.setState({ cal });
  };

  operations = (operate) => {
    try {
      let cal = { ...this.state.cal };
      if (cal.operate !== "") return 0;

      if (cal.currentOperand === "" && cal.perviousOperand === "") {
        return null;
      } else if (cal.perviousOperand === "") {
        cal.operate = operate;
        cal.perviousOperand = cal.currentOperand + operate;
        cal.currentOperand = "";
      } else {
        cal.operate = operate;
        cal.perviousOperand =
          eval(cal.perviousOperand + cal.currentOperand) + operate;
        cal.currentOperand = "";
      }

      this.setState({ cal });
    } catch (error) {}
  };

  clearBnt = () => {
    let cal = { ...this.state.cal };

    cal = {
      currentOperand: "",
      perviousOperand: "",
      operate: "",
    };

    this.setState({ cal });
  };

  evaluteBtn = () => {
    try {
      let cal = { ...this.state.cal };
      console.log("iii", cal.perviousOperand + cal.currentOperand);
      cal.currentOperand = eval(cal.perviousOperand + cal.currentOperand);
      cal.operate = "";

      this.setState({ cal });
    } catch (error) {}
  };

  render() {
    return (
      <div className="calculator">
        <h3>Calculator</h3>
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">
              {this.state.cal.perviousOperand}
            </div>
            <div className="current-operand">
              {this.state.cal.currentOperand}
            </div>
          </div>
          <button onClick={() => this.clearBnt()} className="span-two">
            AC
          </button>
          <button onClick={() => this.operations("DEL")}>DEL</button>
          <button onClick={() => this.operations("/")}>&divide;</button>

          <button onClick={() => this.addDigit("1")}>1</button>
          <button onClick={() => this.addDigit("2")}>2</button>
          <button onClick={() => this.addDigit("3")}>3</button>

          <button onClick={() => this.operations("*")}>*</button>

          <button onClick={() => this.addDigit("4")}>4</button>
          <button onClick={() => this.addDigit("5")}>5</button>
          <button onClick={() => this.addDigit("6")}>6</button>

          <button onClick={() => this.operations("+")}>+</button>

          <button onClick={() => this.addDigit("7")}>7</button>
          <button onClick={() => this.addDigit("8")}>8</button>
          <button onClick={() => this.addDigit("9")}>9</button>

          <button onClick={() => this.operations("-")}>-</button>

          <button onClick={() => this.addDigit(".")}>.</button>
          <button onClick={() => this.addDigit("0")}>0</button>

          <button onClick={() => this.evaluteBtn()} className="span-two">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
