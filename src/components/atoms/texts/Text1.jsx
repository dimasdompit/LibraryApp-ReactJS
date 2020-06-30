import React, { Component } from "react";
import Styles from "../../../styles/atoms/texts/LoginText.module.css";

class Text extends Component {
  render() {
    return <p className={Styles.loginText}>{this.props.text}</p>;
  }
}

export default Text;
