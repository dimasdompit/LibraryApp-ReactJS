import React from "react";
import { Button } from "reactstrap";
import Styles from "../../../styles/atoms/buttons/MainButton.module.css";

const MainButton = ({ type, onClick, text }) => {
  return (
    <Button className={Styles.loginButton} type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default MainButton;
