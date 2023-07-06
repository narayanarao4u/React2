import React from "react";

// export function FunctComp(){
//   return (
//     <h2>This is Functional Component</h2>
//   )
// }

// export  {FunctComp}

/*
const FunctComp = () =>  <h1>This is Functional Component</h1>

export  FunctComp
*/

const FunctComp = () => {
  return React.createElement(
    "div",
    { className: "green" },
    React.createElement("h2", null, "FunctComp")
  );
};

export default FunctComp;
