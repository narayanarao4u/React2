import React from "react";

export default function Marks(prop) {
  return (
    <div className="marksdiv">
      <span>{prop.subject}</span>
      <span className={"textbold " + prop.result}>{prop.scoure}</span>
    </div>
  );
}
