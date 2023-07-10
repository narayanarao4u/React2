import React from "react";

export function StudentDetails(prop) {
  // console.log(prop);
  return (
    <div>
      <h2>Student Name : {prop.studentName} </h2>
      <h3>Class : {prop.classStudy}</h3>
    </div>
  );
}
