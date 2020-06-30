import React from "react";
import { Input, Label } from "reactstrap";

import Styles from "../../../styles/atoms/forms/CheckBox.module.css";

const CheckBox = ({ type, onChange }) => {
  return (
    <Label check className={Styles.checkbox}>
      <Input type={type} onChange={onChange} />
      <Label>Remember me</Label>
    </Label>
  );
};

export default CheckBox;
