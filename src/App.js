import React from "react";
import { FunctComp as FC } from "./FunctComp";
import ClassComp from "./ClassComp";
import { StudentDetails } from "./FunctionComp/StudentDetails";
import Marks from "./FunctionComp/Marks";
import "./App.css";

function App() {
  return (
    <div>
      {/* <MyFirstComp />    */}
      {/* <FC />    */}
      {/* <ClassComp />    */}
      <StudentDetails studentName="Ramesh" classStudy="8th" />
      <Marks subject="Maths" scoure="80" result="Pass" />
      <Marks subject="Physics" scoure="20" result="Fail" />
      <Marks subject="Chemistry" scoure="60" result="Pass" />
    </div>
  );
}

export default App;
