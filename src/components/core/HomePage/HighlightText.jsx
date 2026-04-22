import React from "react";

const HighlightText = ({ text, className = "" }) => {
  return (
    <span
      className={`bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text font-bold text-transparent ${className}`}
    >
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
