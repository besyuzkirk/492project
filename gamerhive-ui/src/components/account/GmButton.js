import React from "react";
import "./GmButton.scss";

function GmButton(props) {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className="account-button"
      placeholder="Create Post"
      style={{ borderRadius : props.borderRadius  }}
    >
      {props.btnName}
    </button>
  );
}

export default GmButton;
