import React from "react";

export default function Marks(prop) {
  return (
    <div className="marksdiv">
      <span>{prop.subject}</span>
      <span className={`textbold ${prop.scoure < 40 ? 'red': prop.scoure>=80 ? 'green' :'' }  `}>{prop.scoure}</span>
    </div>
  );
}
