import React from "react";
import { Input } from "reactstrap";
import Styles from "../../../styles/atoms/forms/InputForm.module.css";

const InputForm = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <Input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={Styles.inputForm}
    />
  );
};

export default InputForm;
