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
        { id: 1, subject: "Maths", score: 80 },
        { id: 2, subject: "Physics", score: 30 },
        { id: 3, subject: "Chemistry", score: 50 },
      ],
      revalueApply: false,
      count: 0,
    };
  }

  btnClick() {
    let state1 = { ...this.state };
    state1.revalueApply = true;
    state1.count = state1.count + 1;
    this.setState({ revalueApply: state1.revalueApply, count: state1.count });
  }

  render() {
    return (
      <div>
        <StudentDetails
          studentName={this.state.studentName}
          classStudy={this.state.classStudy}
        />
        <ol>
          {this.state.marks.map((o) => (
            <li key={o.id}>
              <Marks subject={o.subject} score={o.score} />
            </li>
          ))}
        </ol>
        <span>
          {this.state.revalueApply
            ? "Applied for Revaluation " + this.state.count + " times"
            : "Apply Revaluation"}{" "}
        </span>{" "}
        <button onClick={() => this.btnClick()}>Apply </button>
      </div>
    );
  }
}

export default Result1;
