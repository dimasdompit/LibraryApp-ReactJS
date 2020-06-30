import React from "react";
import Styles from "../../../styles/atoms/headings/LoginHeading.module.css";

const Heading1 = ({ text }) => {
  return <h1 className={Styles.loginTitle}>{text}</h1>;
};

export default Heading1;
