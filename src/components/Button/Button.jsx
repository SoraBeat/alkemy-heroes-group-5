import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.doSomething}
      className={`button rounded ${props.className}`}
      style={{ width: props.width, height: props.height, margin:props.margin }}
    >
      {props.text}
    </button>
  );
};

export default Button;
