import React from "react";
import Styles from "../../../styles/atoms/headings/LoginTitle.module.css";

const Title = ({ text }) => {
  return <h2 className={Styles.loginTitle}>{text}</h2>;
};

export default Title;
