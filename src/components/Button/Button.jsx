import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.doSomething}
      className="button rounded"
      style={{ width: props.width, height: props.height }}
    >
      {props.text}
    </button>
  );
};

export default Button;
