import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowStyle = {
  background: "#ccc",
  zIndex: 2,
  margin: "0 20px",
  height: "50px",
  width: "50px",
  borderRadius: "50px",
};

export default ({ className, to, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`button button--text button--icon ${className}`}
    aria-label={to}
    style={arrowStyle}
    onMouseEnter
  >
    {/* <FontAwesomeIcon className="icon" icon={faArrowLeft} /> */}
    {/* <p>H1</p> */}
  </button>
);
