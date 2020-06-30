import React, { Component } from "react";

import InputForm from "../../components/atoms/forms/InputForm";

class InputLoginGroup extends Component {
  render() {
    return (
      <>
        <InputForm
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email Address"
        />
        <InputForm
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Password"
        />
      </>
    );
  }
}

export default InputLoginGroup;
