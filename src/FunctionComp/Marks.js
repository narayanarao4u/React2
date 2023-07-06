import React from "react";

export default function Marks(prop) {
  return (
    <div className="marksdiv">
      <span>{prop.subject}</span>
      <span
        className={`textbold ${
          prop.score < 40 ? "red" : prop.score >= 80 ? "green" : ""
        }  `}
      >
        {" "}
        {prop.score}
      </span>
    </div>
  );
}
