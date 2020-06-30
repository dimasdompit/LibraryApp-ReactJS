import React, { Component } from "react";
import { Form, FormGroup } from "reactstrap";

import InputForm from "../../components/atoms/forms/InputForm";

class InputRegisterGroup extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <InputForm
            type="text"
            name="username"
            id="exampeUsername"
            placeholder="Username"
          />
          <InputForm
            type="text"
            name="fullname"
            id="exampleFullname"
            placeholder="Full Name"
          />
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
        </FormGroup>
      </Form>
    );
  }
}

export default InputRegisterGroup;
