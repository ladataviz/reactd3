import React, { Component } from "react";

const Toggle = ({ label, value, name, onClick }) => {
  let className = "btn btn-default";

  if (value) {
    className += " btn-primary";
  }

  return (
    <button className={className} onClick={() => onClick(name, !value)}>
      {label}
    </button>
  );
};

export default Toggle;
