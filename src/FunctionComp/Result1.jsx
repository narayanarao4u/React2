import React, { Component } from "react";
import { StudentDetails } from "./StudentDetails";
import Marks from "./Marks";

class Result1 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    studentName: "Ramesh",
    classStudy: "9th",
    marks: [
      { subject: "Maths", score: 80 },
      { subject: "Physics", score: 30 },
      { subject: "Chemistry", score: 50 },
    ],
  };

  render() {
    return (
      <div>
        <StudentDetails
          studentName={this.state.studentName}
          classStudy={this.state.classStudy}
        />
        <ol>
          {this.state.marks.map((o) => (
            <li>
              <Marks subject={o.subject} score={o.score} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Result1;
