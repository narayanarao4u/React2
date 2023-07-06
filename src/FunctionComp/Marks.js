import React from "react";

export default function Marks(prop) {
  return (
    <div className="marksdiv">
      <span>{prop.subject}</span>
<<<<<<< HEAD
      <span
        className={`textbold ${
          prop.score < 40 ? "red" : prop.score >= 80 ? "green" : ""
        }  `}
      >
        {" "}
        {prop.score}
      </span>
=======
      <span className={`textbold ${prop.scoure < 40 ? 'red': prop.scoure>=80 ? 'green' :'' }  `}>{prop.scoure}</span>
>>>>>>> fc6cd6b6fa5a72f441f33eb208e6ec7bf197c881
    </div>
  );
}
