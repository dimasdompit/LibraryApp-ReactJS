import React, { Component } from "react";
import Styles from "../../../styles/atoms/texts/Terms.module.css";

class Terms extends Component {
  render() {
    return (
      <p className={Styles.terms}>
        By signing up, you agree to Book's <br />
        <span>Terms and Conditions</span> & <span>Policy</span>
      </p>
    );
  }
}

export default Terms;
