import React, { Component } from "react";
import { StudentDetails } from "./StudentDetails";
import Marks from "./Marks";

class Result1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Ramesh",
      classStudy: "9th",
      marks: [
        { subject: "Maths", score: 80 },
        { subject: "Physics", score: 30 },
        { subject: "Chemistry", score: 50 },
      ],
      revalueApply: false,
      message: "Apply for Revaluation",
      count: 0,
    };
  }

  btnClick() {
    let myState = { ...this.state };
    myState.revalueApply = true;
    myState.message = "Applied for Revaluation";
    this.setState(
      {
        revalueApply: myState.revalueApply,
        message: myState.message,
        count: myState.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  }

  clickbtn() {
    console.log("button clicked");
  }
  render() {
    return (
      <div>
        <StudentDetails
          studentName={this.state.studentName}
          classStudy={this.state.classStudy}
        />
        <ol>
          {this.state.marks.map((o, i) => (
            <li key={i}>
              <Marks subject={o.subject} score={o.score} />
            </li>
          ))}
        </ol>
        <span>
          {" "}
          {this.state.message}{" "}
          {this.state.count > 0 ? this.state.count + "times" : ""}
        </span>{" "}
        <button onClick={this.clickbtn}>Click</button>
        <button onClick={() => this.btnClick()}>Apply</button>
      </div>
    );
  }
}

export default Result1;
